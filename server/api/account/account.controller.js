'use strict';
var pg = require('pg');
var _ = require('lodash');

var connectionString = "postgres://socialapp:socisoci@local.socialapp/postgres";

// Get list of accounts
exports.index = function(req, res) {
  res.json([]);
};