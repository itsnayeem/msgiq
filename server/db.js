'use strict';

var config = require('./config/environment');
var knex = null;

module.exports = (function () {
    if (knex != null) {
        return knex;
    }
    knex = require('knex')(config.dbConfig);
    knex.salt = config.salt;
    return knex;
})();