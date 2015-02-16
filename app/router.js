import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('player', function() {
    this.route('new');
    this.route('show', { path: ':id'});
  });

});

export default Router;
