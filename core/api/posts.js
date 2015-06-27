var Post = require('../models').Post;

module.exports = {

  addPost: function(title, content, user_id) {
    var post = new Post();
    post.title = title;
    post.content = content;
    post.user_id = user_id;
    post.save(function(err) {
      if(err) return err;
      return post;
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
