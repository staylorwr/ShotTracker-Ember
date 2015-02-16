import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('player');
  },


  afterModel: function(players) {
    if(players.get('length') === 0) {
      return this.transitionTo('players.new');
    }
  }
});
