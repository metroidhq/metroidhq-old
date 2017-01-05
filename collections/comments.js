import SimpleSchema from 'simpl-schema';
import Mongo from 'meteor/mongo';

const Comments = new Mongo.Collection('comments');

Comments.attachSchema(new SimpleSchema({
  pageId: {
    type: String,
    label: 'Page Reference',
  },
  userId: {
    type: String,
    label: 'User Reference',
  },
  userName: {
    type: String,
    label: 'User Name',
  },
  content: {
    type: String,
    label: 'Content',
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    defaultValue: new Date(),
  },
  createdAtMS: {
    type: Number,
    label: 'Created At MS',
  },
  modifiedAt: {
    type: Date,
    label: 'Modified At',
    defaultValue: new Date(),
  },
  archived: {
    type: Boolean,
    label: 'Archived',
    defaultValue: false,
  },
  archivedMessage: {
    type: String,
    label: 'Archived Message',
    defaultValue: 'This message has been archived.',
  },
}));

export default Comments;
