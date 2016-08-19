// set root element for blaze rendering
if (Meteor.isClient) {
  BlazeLayout.setRoot('body');
}

// default (homepage) route
FlowRouter.route('/', {
  subscriptions: function(params) {
    const slug = 'home';

    this.register('pageData', Meteor.subscribe('page', slug));
  },

  action: function(){
    BlazeLayout.render('layout', {
      header: "homeHeader",
      content: "home"
    });
  }
});

// registration route
FlowRouter.route('/register', {
  subscriptions: function(params) {
    const slug = 'register';

    this.register('pageData', Meteor.subscribe('page', slug));
  },

  action: function(){
    BlazeLayout.render('layout', {
      header: "header",
      content: "register"
    });
  }
});

// games overview page
FlowRouter.route('/games/:game/overview', {
  subscriptions: function(params) {
    const slug = params.game + '/overview';

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      content: 'gameOverview'
    });
  }
});

// games official art page
FlowRouter.route('/games/:game/official-art', {
  subscriptions: function(params) {
    const slug = params.game + '/official-art';

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      content: 'gameOfficialArt'
    });
  }
});

// games screenshots page
FlowRouter.route('/games/:game/screenshots', {
  subscriptions: function(params) {
    const slug = params.game + '/screenshots';

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      content: 'gameScreenshots'
    });
  }
});

// games music page
FlowRouter.route('/games/:game/music', {
  subscriptions: function(params) {
    const slug = params.game + '/music';

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      content: 'gameMusic'
    });
  }
});

// games maps page
FlowRouter.route('/games/:game/maps', {
  subscriptions: function(params) {
    const slug = params.game + '/maps';

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      content: 'gameMaps'
    });
  }
});

// games guides page
FlowRouter.route('/games/:game/guides', {
  subscriptions: function(params) {
    const slug = params.game + '/guides';

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      content: 'gameGuides'
    });
  }
});

// games fan works page
FlowRouter.route('/games/:game/fan-works', {
  subscriptions: function(params) {
    const slug = params.game + '/fan-works';

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      content: 'gameFanWorks'
    });
  }
});

// news pages
FlowRouter.route('/news/:page', {
  subscriptions: function(params) {
    const slug = 'news/' + params.page;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      // content: 'news' + params.page
      content: 'comingSoon'
    });
  }
});

// features pages
FlowRouter.route('/features/:page', {
  subscriptions: function(params) {
    const slug = 'features/' + params.page;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      // content: 'features' + params.page
      content: 'comingSoon'
    });
  }
});

// podcast pages
FlowRouter.route('/podcasts/:page', {
  subscriptions: function(params) {
    const slug = 'podcasts/' + params.page;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      // content: 'podcasts' + params.page
      content: 'comingSoon'
    });
  }
});

// about pages
FlowRouter.route('/fan-works/:page', {
  subscriptions: function(params) {
    const slug = 'fan-works/' + params.page;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      // content: 'fanWorks' + params.page
      content: 'comingSoon'
    });
  }
});

// about pages
FlowRouter.route('/about/:page', {
  subscriptions: function(params) {
    const slug = 'about/' + params.page;

    this.register('pageData', Meteor.subscribe('page', slug));
    this.register('comments', Meteor.subscribe('comments', slug));
  },

  action: function(params) {
    BlazeLayout.render('layout', {
      header: "header",
      // content: 'about' + params.page
      content: 'comingSoon'
    });
  }
});