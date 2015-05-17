/**
 * GET      ->  index
 * POST     ->  create
 * GET      ->  show
 * PUT      ->  update
 * DELETE   ->  destroy
 */

'use strict';
var pg = require('pg');
var uuid = require('uuid');
var Promise = require('promise');

var account = require('../../models/account');

module.exports = {
    /**
     * POST /api/accounts
     * @param req
     * @param res
     */
    create: function (req, res) {
        var user = {
            username: req.body.username,
            password: req.body.password
        };

        account.addUser(user).then(function (id) {
            account.getUserById(id).then(function (user) {
                res.json(user);
            }, function (err) {
                res.status(500);
                res.json(err);
            });
        }, function (err) {
            switch (err.type) {
                case 'query':
                    res.status(400);
                    res.json(err);
                    break;
                default:
                    res.status(500);
                    res.json(err);
            }
        });
    },
    /**
     * GET /api/accounts
     * @param req
     * @param res
     */
    index: function (req, res) {
        account.getAllUsers().then(function (users) {
            res.json(users);
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    },
    /**
     * GET /api/accounts/:id
     * @param req
     * @param res
     */
    show: function (req, res) {
        var id = req.params.id;

        account.getUserById(id).then(function (user) {
            if (!user) {
                res.status(404);
                res.json({'error': 'User not found'})
            } else {
                res.json(user);
            }
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    }
};