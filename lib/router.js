import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout ';

// Set root element for blaze rendering
if (Meteor.isClient) {
  BlazeLayout.setRoot('body');
}

// Default (Home) Route
FlowRouter.route('/', {
  subscriptions() {
    const slug = 'home';

    this.register('pageData', Meteor.subscribe('page', slug));
  },

  action() {
    BlazeLayout.render('layout', {
      header: 'homeHeader',
      content: 'home',
    });
  },
});

// Registration Route
FlowRouter.route('/register', {
  subscriptions() {
    const slug = 'register';

    this.register('pageData', Meteor.subscribe('page', slug));
  },

  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'register',
    });
  },
});

// Games Overview Page
FlowRouter.route('/games/:game/overview', {
  subscriptions(params) {
    const slug = `${params.game}/overview`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'gameOverview',
    });
  },
});

// Games Official Art Page
FlowRouter.route('/games/:game/official-art', {
  subscriptions(params) {
    const slug = `${params.game}/official-art`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'gameOfficialArt',
    });
  },
});

// Games Screenshots Page
FlowRouter.route('/games/:game/screenshots', {
  subscriptions(params) {
    const slug = `${params.game}/screenshots`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'gameScreenshots',
    });
  },
});

// Games Music Page
FlowRouter.route('/games/:game/music', {
  subscriptions(params) {
    const slug = `${params.game}/music`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'gameMusic',
    });
  },
});

// Games Maps Page
FlowRouter.route('/games/:game/maps', {
  subscriptions(params) {
    const slug = `${params.game}/maps`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'gameMaps',
    });
  },
});

// Games Guides Page
FlowRouter.route('/games/:game/guides', {
  subscriptions(params) {
    const slug = `${params.game}/guides`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'gameGuides',
    });
  },
});

// Games Fan Works Page
FlowRouter.route('/games/:game/fan-works', {
  subscriptions(params) {
    const slug = `${params.game}/fan-works`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action() {
    BlazeLayout.render('layout', {
      header: 'header',
      content: 'gameFanWorks',
    });
  },
});

// News Pages
FlowRouter.route('/news/:page', {
  subscriptions(params) {
    const slug = `news/${params.page}`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action(params) { // eslint-disable-line
    BlazeLayout.render('layout', {
      header: 'header',
      // content: `news/${params.page}`;
      content: 'comingSoon',
    });
  },
});

// Features Pages
FlowRouter.route('/features/:page', {
  subscriptions(params) {
    const slug = `features/${params.page}`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action(params) { // eslint-disable-line
    BlazeLayout.render('layout', {
      header: 'header',
      // content: `features/${params.page}`;
      content: 'comingSoon',
    });
  },
});

// Fodcast Pages
FlowRouter.route('/podcasts/:page', {
  subscriptions(params) {
    const slug = `podcasts/${params.page}`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action(params) { // eslint-disable-line
    BlazeLayout.render('layout', {
      header: 'header',
      // content: `podcasts/${params.page}`;
      content: 'comingSoon',
    });
  },
});

// Fane= Works Pages
FlowRouter.route('/fan-works/:page', {
  subscriptions(params) {
    const slug = `fan-works/${params.page}`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action(params) { // eslint-disable-line
    BlazeLayout.render('layout', {
      header: 'header',
      // content: `fanWorks/${params.page}`;
      content: 'comingSoon',
    });
  },
});

// About Pages
FlowRouter.route('/about/:page', {
  subscriptions(params) {
    const slug = `about/${params.page}`;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action(params) { // eslint-disable-line
    BlazeLayout.render('layout', {
      header: 'header',
      // content: `about/${params.page}`;
      content: 'comingSoon',
    });
  },
});
