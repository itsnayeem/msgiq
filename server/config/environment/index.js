'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
    if (!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable');
    }
    return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(__dirname + '/../../..'),

    // Server port
    port: process.env.PORT || 8000,

    // Secret for session, you will want to change this and make it an environment variable
    secrets: {
        session: 'msgiq-secret'
    },

    dbConfig: {
        client: 'pg',
        connection: "postgres://msgiq:socisoci@127.0.0.1/msgiq"
    },

    salt: "3DA28124-783F-41C6-A9B4-AAA6C26AEA4F"
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(all, require('./' + process.env.NODE_ENV + '.js') || {});