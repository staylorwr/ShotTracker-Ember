import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['number'],
  classNameBindings: ['lowPercent', 'highPercent'],

  madeShots: Ember.computed.filterBy('shotsArray', 'made'),

  madeShotCount: function() {
    return this.get('madeShots.length');
  }.property('madeShots.@each'),

  totalShotCount: function() {
    return this.get('shotsArray.length');
  }.property('shotsArray.@each'),

  percentMade: function() {
    return Math.floor((this.get('madeShotCount') / this.get('totalShotCount')) * 100);
  }.property('madeShotCount', 'totalShotCount'),

  lowPercent: Ember.computed.lte('percentMade', 25),
  highPercent: Ember.computed.gte('percentMade', 75)

});
