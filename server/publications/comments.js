import { Meteor } from 'meteor/meteor';
import Comments from '../../collections/comments';

Meteor.publish('comments', (pageId) =>
  Comments.find({ pageId },
    {
      limit: 100,
      sort: {
        createdAtMS: -1,
      },
    }
  )
);
