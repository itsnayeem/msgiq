'use strict';

var Promise = require('bluebird');
var uuid = require('uuid');
var crypto = require('crypto');
var db = require('../db');

var table = 'account';
/**
 * Schema for table 'account':
 * id:          uuid
 * username:    varchar(255)
 * password:    varchar(256) md5
 */

function encryptPassword(password) {
    var md5sum = crypto.createHash('md5');
    return md5sum.update(password + db.salt).digest('hex');
}

module.exports = {

    addAccount: function (account) {
        return new Promise(function (resolve, reject) {
            account.id = uuid.v4();

            account.password = encryptPassword(account.password);

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
            account.password = encryptPassword(account.password);
        }
        return db.update(account).where('id', id).from(table);
    },

    deleteAccountById: function (id) {
        return db.delete().where('id', id).from(table);
    }
};