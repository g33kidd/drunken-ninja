var express = require('express');
var router  = express.Router();

adminRoutes = function() {

  router.get('/', function(req, res) {
    res.render('error');
  });

  return router;
}

module.exports = adminRoutes();