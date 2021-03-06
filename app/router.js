import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('waiter');
  this.route('table');
  this.route('review', function() {
    this.route('detail');
  });
});

export default Router;
