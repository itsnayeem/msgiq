'use strict';

var moment = require('moment');
var crypto = require('crypto');
var db = require('../db');

module.exports = {
    /**
     * Get current time in UTC
     */
    getTimestamp: function () {
        return moment().utc().format('YYYY-MM-DD HH:mm:ss');
    },

    /**
     * Encrypt password
     *
     * @param password
     * @returns {*}
     */
    encryptPassword: function(password) {
        var md5sum = crypto.createHash('md5');
        return md5sum.update(password + db.salt).digest('hex');
    }
};