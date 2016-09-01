Template.addComment.events({
  // press enter on input
  'keyup #addcomment': function(event) {
    if (event.which === 13) {
      event.stopPropagation();

      const comment = event.target.value;

      if (comment) {
        event.target.value = '';

        const userName = Meteor.users.findOne().username;
        const pageId = Pages.findOne().slug;

        Meteor.call('addComment', comment, userName, pageId, function(err, res) {
          if (err) {
            alert(err);
          }
        });
      }

      return false;
    }
  },

  'click #submitcomment': function() {
    const commentBox = document.querySelector('#addcomment');

    if (commentBox.value) {
      const comment = commentBox.value;

      commentBox.value = '';

      const userName = Meteor.users.findOne().username;
      const pageId = Pages.findOne().slug;

      Meteor.call('addComment', comment, userName, pageId, function(err, res) {
        if (err) {
          alert(err);
        }
      });
    }

    return false;
  }
});