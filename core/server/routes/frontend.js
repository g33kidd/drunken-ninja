var express = require('express');
var router  = express.Router();
var api     = require('../api');
var utils   = require('../utils');

frontendRoutes = function() {

  router.get('/', function(req, res) {
    // Just for testing, change this later to actually check
    // if the user is logged in.
    // res.status(500);
  });

  return router;
}

module.exports = frontendRoutes();
