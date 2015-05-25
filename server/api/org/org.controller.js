'use strict';

var Org = require('../../models/org');

module.exports = {
    /**
     * POST /api/orgs
     */
    create: function (req, res) {
        if (!req.body.username || !req.body.email || !req.body.password) {
            res.status(400);
            res.json({'error': 'Missing fields, requires username, email, and password'});
            return;
        }

        var org = {
            username:   req.body.username,
            email:      req.body.email,
            password:   req.body.password
        };

        Org.addOrg(org).then(function (org) {
            res.json(org);
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    },

    /**
     * GET /api/orgs
     */
    index: function (req, res) {
        Org.getAllOrgs().then(function (orgs) {
            res.json(orgs);
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    },

    /**
     * GET /api/orgs/:id
     */
    show: function (req, res) {
        var id = req.params.id;

        Org.getOrgById(id).then(function (org) {
            if (!org) {
                res.status(404);
                res.json({'error': 'Org not found'})
            } else {
                res.json(org);
            }
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    },

    /**
     * PUT /api/orgs/:id
     */
    update: function (req, res) {
        var id = req.params.id;

        if (!req.body.username && !req.body.email && !req.body.password) {
            res.status(400);
            req.json('error', 'Missing fields, requires username, email, or password');
            return;
        }

        var orgUpdates = {};
        if (req.body.username) {
            orgUpdates.username = req.body.username;
        }
        if (req.body.email) {
            orgUpdates.email = req.body.email;
        }
        if (req.body.password) {
            orgUpdates.password = req.body.password;
        }

        if (Object.keys(orgUpdates).length > 0) {
            Org.updateOrgById(id, orgUpdates).then(function (org) {
                if (!org) {
                    res.status(404);
                    res.json({'error': 'Org not found'})
                } else {
                    res.json(org);
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
     * DELETE /api/orgs/:id
     */
    destroy: function (req, res) {
        var id = req.params.id;

        Org.deleteOrgById(id).then(function (org) {
            if (!org) {
                res.status(404);
                res.json({'error': 'Org not found'})
            } else {
                res.json(org);
            }
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    }
};