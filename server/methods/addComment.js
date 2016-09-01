Meteor.methods({
  addComment: function(comment, userName, pageId) {
    if (this.userId) {
      const newComment = {
        pageId: pageId,
        userId: this.userId,
        userName: userName,
        content: comment,
        createdAtMS: Date.now()
      }
      Comments.insert(newComment);
    }
  }
});