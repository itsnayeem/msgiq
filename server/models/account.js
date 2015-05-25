'use strict';

var Promise = require('bluebird');
var uuid = require('uuid');

var common = require('../lib/common');
var db = require('../db');

var table = 'account';
/**
 * Schema for table 'account':
 * id:          uuid            - required, unique
 * username:    varchar(255)    - required, unique
 * email:       varchar(255)    - required, unique
 * password:    varchar(255)
 * created_at:  timestamptz
 * updated_at:  timestamptz
 */

module.exports = {
    addAccount: function (account) {
        account.id = uuid.v4();
        account.password = common.encryptPassword(account.password);
        account.created_at = account.updated_at = common.getTimestamp();

        return new Promise(function (resolve, reject) {
            db.insert(account).into(table).then(function () {
                resolve(account);
            }).catch(function (err) {
                reject(err);
            });
        });
    },

    getAllAccounts: function () {
        return db.select().from(table);
    },

    getAccountById: function (id) {
        return db.select().from(table).where('id', id);
    },

    updateAccountById: function (id, account) {
        if (account.password) {
            account.password = common.encryptPassword(account.password);
        }
        account.updated_at = common.getTimestamp();

        return db.update(account).where('id', id).from(table);
    },

    deleteAccountById: function (id) {
        return db.delete().where('id', id).from(table);
    }
};