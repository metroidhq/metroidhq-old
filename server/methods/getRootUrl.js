import { Meteor } from 'meteor/meteor';

Meteor.methods({
  getRootUrl() {
    return process.env.ROOT_URL;
  },
});
