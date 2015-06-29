var express = require('express');
var router  = express.Router();
var api     = require('../api');
var utils   = require('../utils');

frontendRoutes = function() {

  router.get('/', function(req, res) {
    api.posts.getAllPosts(function(posts) {
      res.render('index', { posts: posts });
    });
  });

  return router;
}

module.exports = frontendRoutes();
