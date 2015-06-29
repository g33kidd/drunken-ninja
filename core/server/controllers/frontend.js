var api     = require('../api');


// All of these res.render should be replaced with a generic function
// to render data, parse html/markdown, and provide helper tags.

module.exports = {

  getHomePage: function(req, res) {
    api.posts.getAllPosts(function(posts) {
      res.render('index', {
        posts: posts
      });
    });
  },

  // Gets the posts archive page.
  getPostsPage: function(req, res) {
    api.posts.getAllPosts(function(posts) {
      res.render('posts', {
        posts: posts
      });
    });
  },

  getPostPage: function(req, res) {
    // Render the single post page...
  },

  getPage: function(req, res) {
    // Render a post of type page...
  }

};
