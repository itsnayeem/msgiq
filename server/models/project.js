'use strict';

var Promise = require('bluebird');
var uuid = require('uuid');

var db = require('../db');

var table = 'project';
/**
 * Schema for table 'project':
 * id:          uuid
 * owner_id:    uuid
 * name:        varchar(255)
 */

module.exports = {
    addProject: function (project) {
        return new Promise(function (resolve, reject) {
            project.id = uuid.v4();

            db.insert(project).into(table).then(function () {
                resolve(project);
            }).catch(function (err) {
                reject(err);
            });
        });
    },

    getAllProjects: function () {
        return db.select().from(table);
    },

    getProjectById: function (id) {
        return db.select().from(table).where('id', id);
    },

    updateProjectById: function (id, project) {
        return db.update(project).where('id', id).from(table);
    },

    deleteProjectById: function (id) {
        return db.delete().where('id', id).from(table);
    }
};