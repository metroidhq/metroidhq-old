Template.registerHelper('getUserName', function(){
  return Meteor.users.findOne().username;
});