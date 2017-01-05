import { Meteor } from 'meteor/meteor';
import Comments from '../../collections/comments';

Meteor.methods({
  addComment(comment, userName, pageId) {
    if (this.userId) {
      const newComment = {
        pageId,
        userId: this.userId,
        userName,
        content: comment,
        createdAtMS: Date.now(),
      };

      Comments.insert(newComment);
    }
  },
});
