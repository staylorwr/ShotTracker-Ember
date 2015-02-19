import Ember from 'ember';

export default Ember.ObjectController.extend({
  shotTypeText: function() {
    switch(this.get('shot_type')) {
      case 'fg':
        return 'Field Goal';
      case 'ft':
        return 'Field Throw';
      default:
        return 'Three Pointer';
    }
  }.property('shot_type'),

  actions: {
    deleteShot: function() {
      this.get('model').destroyRecord().then(function() {
        console.log('deleted!');
      });
    }
  }
});
