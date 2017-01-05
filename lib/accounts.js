import { Meteor } from 'meteor/meteor';
import { AccountsTemplates } from 'meteor/useraccounts:unstyled';

AccountsTemplates.configure({
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  focusFirstInput: false,
  homeRoutePath: '/',
});

AccountsTemplates.addField({
  _id: 'username',
  type: 'text',
  required: true,
  func(value) {
    if (Meteor.isClient) {
      const self = this;

      Meteor.call('userExists', value, (err, userExists) => {
        if (!userExists) {
          self.setSuccess();
        } else {
          self.setError(userExists);
          self.setValidating(false);
        }
      });
    }

    // Server
    Meteor.call('userExists', value);
  },
});
