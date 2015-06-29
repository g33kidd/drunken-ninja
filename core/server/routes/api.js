var express = require('express');
var router  = express.Router();
var api     = require('../api');
var utils   = require('../utils');

apiRoutes = function() {

  router.get('/', function(req, res) {
    // Just for testing, change this later to actually check
    // if the user is logged in.
    // res.status(500);
  });

  // Again, just for testing and specifications.
  router.get('/posts', function(req, res) {
    api.posts.getAllPosts(function(posts) {
      res.json({ posts: posts });
    });
  });

  router.post('/posts', function(req, res) {
    if(req.body.post.title && req.body.post.content) {
      var postOptions = {
        title: req.body.post.title,
        content: req.body.post.content,
        user_id: 1
      };

      api.posts.addPost(postOptions, function(newPost) {
        res.json({post: newPost});
        console.log(newPost);
      });

      res.status(200);
    }else{
      res.status(500);
    }
  });

  router.delete('/posts/:id', function(req, res) {
    if(req.params.id) {
      if(api.posts.removePost(req.params.id)) {
        res.status(200);
      }else{
        res.status(500);
      }
    }else{
      res.status(500);
    }
  });

  return router;
}

module.exports = apiRoutes();
