this.Pages = new Mongo.Collection('pages');

Pages.attachSchema(new SimpleSchema({
  slug: {
    type: String,
    label: 'Slug'
  },
  title: {
    type: String,
    label: 'Title'
  },
  tagline: {
    type: String,
    label: 'Tagline'
  },
  icon: {
    type: String,
    label: 'Icon'
  },
  banner: {
    type: String,
    label: 'Banner Image',
    optional: true
  },
  template: {
    type: String,
    label: 'Template'
  },
  discussion: {
    type: Boolean,
    label: 'Discussion',
    defaultValue: false
  },
  access: {
    type: String,
    label: 'Access',
    defaultValue: 'public',
    allowedValues: ['public', 'admin']
  }
}));