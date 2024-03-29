'use strict';

var Promise = require('bluebird');
var uuid = require('uuid');

var db = require('../db');

var table = 'org';
/**
 * Schema for table 'org':
 * id:          uuid
 * owner_id:    uuid
 * name:        varchar(255)
 */

module.exports = {
    addOrg: function (org) {
        return new Promise(function (resolve, reject) {
            org.id = uuid.v4();

            db.insert(org).into(table).then(function () {
                resolve(org);
            }).catch(function (err) {
                reject(err);
            });
        });
    },

    getAllOrgs: function () {
        return db.select().from(table);
    },

    getOrgById: function (id) {
        return db.select().from(table).where('id', id);
    },

    updateOrgById: function (id, org) {
        return db.update(org).where('id', id).from(table);
    },

    deleteOrgById: function (id) {
        return db.delete().where('id', id).from(table);
    }
};