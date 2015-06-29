var express = require('express');
var router  = express.Router();
var api     = require('../api');
var utils   = require('../utils');

var controller = require('../controllers').frontend;

frontendRoutes = function() {

  router.get('/', controller.getHomePage);
  router.get('/posts', controller.getPostsPage);
  router.get('/posts/:post_id', controller.getPostPage);
  router.get('/:page_slug', controller.getPage);

  return router;
}

module.exports = frontendRoutes();
