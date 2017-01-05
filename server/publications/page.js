import { Meteor } from 'meteor/meteor';
import Pages from '../../collections/pages';

Meteor.publish('page', (slug) => Pages.find({ slug }));
