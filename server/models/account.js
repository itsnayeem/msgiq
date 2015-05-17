'use strict';
var pg = require('pg');
var uuid = require('uuid');
var Promise = require('promise');
var crypto = require('crypto');
var md5sum = crypto.createHash('md5');

var db = require('../config/db');

/**
 * Schema for table 'account':
 * id:          uuid
 * username:    varchar(255)
 * password:    varchar(256) md5
 */

module.exports = {

    addUser: function (user) {
        return new Promise(function (resolve, reject) {
            user.id = uuid.v4();
            user.password = md5sum.update(user.password + db.salt).digest('hex');
            pg.connect(db.connstr, function (err, client, done) {
                var query = client.query("INSERT INTO accounts(id, username, password) values($1, $2, $3)",
                    [user.id, user.username, user.password]);

                query.on('end', function () {
                    resolve(user.id);
                });

                query.on('error', function (err) {
                    reject({'type': 'query', 'err': err})
                });

                if (err) {
                    reject({'type':'connection', 'err': err});
                }
            });
        });
    },

    getAllUsers: function () {
        return new Promise(function (resolve, reject) {
            var results = [];
            pg.connect(db.connstr, function (err, client, done) {
                var query = client.query("SELECT id, username FROM accounts;");

                query.on('row', function (row) {
                    results.push(row);
                });

                query.on('end', function () {
                    client.end();
                    resolve(results);
                });

                if (err) {
                    reject(err);
                }
            });
        });
    },

    getUserById: function (id) {
        return new Promise(function (resolve, reject) {
            var results = null;
            pg.connect(db.connstr, function (err, client, done) {
                var query = client.query("SELECT id, username FROM accounts WHERE id = $1;", [id]);

                query.on('row', function (row) {
                    results = row;
                });

                query.on('end', function () {
                    client.end();
                    resolve(results);
                });

                if (err) {
                    reject(err);
                }
            });
        });
    }
};