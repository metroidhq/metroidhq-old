Template.userControls.events({
  'click #signout': function() {
    AccountsTemplates.logout();
  },

  'click #register': function() {
    FlowRouter.go('/register');
  }
});