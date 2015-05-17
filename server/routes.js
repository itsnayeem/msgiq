/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var pg = require('pg');
var db = require('./config/db');

module.exports = function(app) {
  app.route('/db/update').get(function (req, res) {
      console.log("db update");
      pg.connect(db.connstr, function (err, client, done) {

          client.query("CREATE TABLE IF NOT EXISTS public.accounts (" +
                "id uuid NOT NULL," +
                "username character varying(255) NOT NULL," +
                "password character varying(255) NOT NULL" +
              ");" +
              "ALTER TABLE public.accounts OWNER TO socialapp;" +
              "ALTER TABLE ONLY accounts ADD CONSTRAINT accounts_id PRIMARY KEY (id);" +
              "ALTER TABLE ONLY accounts ADD CONSTRAINT accounts_username UNIQUE (username);",
          function (err, result) {
              console.log(err, result);
              res.json(result);
          });

      });
  });

  // Insert routes below
  app.use('/api/accounts', require('./api/account'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets|db)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
