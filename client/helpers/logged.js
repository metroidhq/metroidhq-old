Template.registerHelper('logged', function(){
  if (Meteor.userId()) {
    return true;
  }
});