import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    newPost: function() {
      var title = $('.post-title').val();
      var content = $('.post-content').val();

      var post = this.store.createRecord('post', {
        title: title,
        content: content
      });
      post.save();
    },

    deletePost: function(post) {
      this.store.find('post', post.id).then(function(post) {
        post.deleteRecord();
        post.save();
      })
    }
  }

});
