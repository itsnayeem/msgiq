'use strict';

var Account = require('../../models/account');

module.exports = {
    /**
     * POST /api/accounts
     * @param req
     * @param res
     */
    create: function (req, res) {
        var account = {
            username: req.body.username,
            password: req.body.password
        };

        Account.addAccount(account).then(function (account) {
            res.json(account);
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    },

    /**
     * GET /api/accounts
     * @param req
     * @param res
     */
    index: function (req, res) {
        Account.getAllAccounts().then(function (accounts) {
            res.json(accounts);
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

        Account.getAccountById(id).then(function (account) {
            if (!account) {
                res.status(404);
                res.json({'error': 'Account not found'})
            } else {
                res.json(account);
            }
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    },

    /**
     * PUT /api/accounts/:id
     * @param req
     * @param res
     */
    update: function (req, res) {
        var id = req.params.id;

        var accountUpdates = {};
        if (req.body.username) {
            accountUpdates.username = req.body.username;
        }
        if (req.body.password) {
            accountUpdates.password = req.body.password;
        }
        if (Object.keys(accountUpdates).length > 0) {
            Account.updateAccountById(id, accountUpdates).then(function (account) {
                if (!account) {
                    res.status(404);
                    res.json({'error': 'Account not found'})
                } else {
                    res.json(account);
                }
            }, function (err) {
                res.status(500);
                res.json({'error': err});
            });
        } else {
            res.status(400);
            res.json({'error': "No data to update"})
        }
    },

    /**
     * DELETE /api/accounts/:id
     * @param req
     * @param res
     */
    destroy: function (req, res) {
        var id = req.params.id;

        Account.deleteAccountById(id).then(function (account) {
            if (!account) {
                res.status(404);
                res.json({'error': 'Account not found'})
            } else {
                res.json(account);
            }
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    }
};