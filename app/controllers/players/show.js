import Ember from 'ember';

export default Ember.ObjectController.extend({

  shots: Ember.computed.alias('model.shots'),

  freeThrows: Ember.computed.filterBy('model.shots', 'shot_type', 'ft').readOnly(),
  fieldGoals: Ember.computed.filterBy('model.shots', 'shot_type', 'fg').readOnly(),
  threePointers: Ember.computed.filterBy('model.shots', 'shot_type', '3p').readOnly(),

  scoresPerShot: Ember.computed.mapBy('shots', 'score').readOnly(),
  totalPoints: Ember.computed.sum('scoresPerShot').readOnly(),

  sortedShots: Ember.computed.sort('shots', function(a,b) {
    var aId = parseInt(a.get('id'));
    var bId = parseInt(b.get('id'));
    if (aId > bId ) {
      return -1;
    } else if (aId < bId) {
      return 1;
    }
    return 0;
  }).readOnly(),

  actions: {
    createShot: function(type, made) {
      var player = this.get('model');
      this.store.createRecord('shot', {
        made: made,
        shot_type: type,
        player: player
      }).save().then(function() {
        console.log('saved!');
      });
    }
  }
});
