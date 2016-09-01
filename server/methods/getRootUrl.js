Meteor.methods({
  getRootUrl: function() {
    return process.env.ROOT_URL;
  }
});