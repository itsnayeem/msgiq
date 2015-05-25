'use strict';

var Project = require('../../models/project');

module.exports = {
    /**
     * POST /api/projects
     */
    create: function (req, res) {
        if (!req.body.username || !req.body.email || !req.body.password) {
            res.status(400);
            res.json({'error': 'Missing fields, requires username, email, and password'});
            return;
        }

        var project = {
            username:   req.body.username,
            email:      req.body.email,
            password:   req.body.password
        };

        Project.addProject(project).then(function (project) {
            res.json(project);
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    },

    /**
     * GET /api/projects
     */
    index: function (req, res) {
        Project.getAllProjects().then(function (projects) {
            res.json(projects);
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    },

    /**
     * GET /api/projects/:id
     */
    show: function (req, res) {
        var id = req.params.id;

        Project.getProjectById(id).then(function (project) {
            if (!project) {
                res.status(404);
                res.json({'error': 'Project not found'})
            } else {
                res.json(project);
            }
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    },

    /**
     * PUT /api/projects/:id
     */
    update: function (req, res) {
        var id = req.params.id;

        if (!req.body.username && !req.body.email && !req.body.password) {
            res.status(400);
            req.json('error', 'Missing fields, requires username, email, or password');
            return;
        }

        var projectUpdates = {};
        if (req.body.username) {
            projectUpdates.username = req.body.username;
        }
        if (req.body.email) {
            projectUpdates.email = req.body.email;
        }
        if (req.body.password) {
            projectUpdates.password = req.body.password;
        }

        if (Object.keys(projectUpdates).length > 0) {
            Project.updateProjectById(id, projectUpdates).then(function (project) {
                if (!project) {
                    res.status(404);
                    res.json({'error': 'Project not found'})
                } else {
                    res.json(project);
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
     * DELETE /api/projects/:id
     */
    destroy: function (req, res) {
        var id = req.params.id;

        Project.deleteProjectById(id).then(function (project) {
            if (!project) {
                res.status(404);
                res.json({'error': 'Project not found'})
            } else {
                res.json(project);
            }
        }, function (err) {
            res.status(500);
            res.json({'error': err});
        });
    }
};