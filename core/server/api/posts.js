var Post = require('../models').Post;

module.exports = {

  addPost: function(options, cb) {
    var post = new Post(options);
    post.save(function(err, post) {
      if(err) return err;
      cb(post);
    });
  },

  removePost: function(id) {
    Post.remove({_id: id}, function(err) {
      if(err) return err;
      return true;
    })
  },

  getAllPosts: function(cb) {
    Post.find().lean().exec(function(err, posts) {
      if(err) console.log(err);
      cb(posts);
    });
  }

};
