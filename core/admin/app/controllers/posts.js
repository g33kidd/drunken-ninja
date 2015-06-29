import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    newPost: function() {
      var title = Ember.$('.post-title').val();
      var content = Ember.$('.post-content').val();

      this.store.createRecord('post', {
        title: title,
        content: content
      }).save();
    },

    deletePost: function(post) {
      this.store.find('post', post.id).then(function(post) {
        post.deleteRecord();
        post.get('isDeleted'); // => true
        post.save(); // => DELETE to /posts/1
      });
    }
  }

});
