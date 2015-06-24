var express = require('express');
var router  = express.Router();

apiRoutes = function() {

  router.get('/', function(req, res) {
    res.send("OK! This is /api/");
  });

  return router;
}

module.exports = apiRoutes();
