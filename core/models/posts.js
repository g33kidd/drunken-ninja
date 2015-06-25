var Schema    = require('mongoose').Schema;
var mongoose  = require('mongoose');

var postSchema = new Schema({
  user_id: String,
  title: String,
  content: String,

  created: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now }
});

var Post = mongoose.model('Post', postSchema)

module.exports = Post;
