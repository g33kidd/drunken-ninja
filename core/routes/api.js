var express = require('express');
var router  = express.Router();
var api     = require('../api');
var utils   = require('../utils');

apiRoutes = function() {

  router.get('/', function(req, res) {
    // Just for testing, change this later to actually check
    // if the user is logged in.
    res.json({
      error: "Access denied!",
      message: "You must be logged in."
    });
  });

  // Again, just for testing and specifications.
  router.get('/posts', function(req, res) {
    api.posts.getAllPosts(function(posts) {
      res.json({ posts: posts });
    });
  });

  router.post(function(req, res) {
    if(req.body.title && req.body.content) {
      var post = api.posts.addPost(req.body.title, req.body.content, 1);
      res.json(post);
    }
  });

  router.route('/posts')
    .post(function(req, res) {
      if(req.body.title && req.body.content) {
        var post = api.posts.addPost(req.body.title, req.body.content, 1);
        res.json(post);
      }else{
        res.json({
          error: "params required",
          message: "The required params were not received."
        })
      }
    })
    .delete(function(req, res) {
      if(req.body.post_id) {
        if(api.posts.removePost(req.body.post_id)) {
          res.status(200);
        }else{
          res.json({
            error: "Post could not be removed!"
          })
        }
      }
    });

  return router;
}

module.exports = apiRoutes();
