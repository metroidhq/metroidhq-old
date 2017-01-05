import { Meteor } from 'meteor/meteor';

Meteor.methods({
  userExists(username) {
    return !!Meteor.users.findOne({ username });
  },
});
