Template.layout.onRendered(function () {
  Meteor.call('getRootUrl', function (err, res) {
    let suffix = '';

    if (res === 'http://metroidhq.com') {
      suffix = '';
    } else if (res === 'http://staging.metroidhq.com') {
      suffix = '-staging';
    } else {
      suffix = '-dev';
    }

    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'shortcut icon');
    favicon.setAttribute('type', 'image/x-icon');
    favicon.setAttribute('href', '/favicon' + suffix + '.ico');

    document.querySelector('head').appendChild(favicon);
  });
});