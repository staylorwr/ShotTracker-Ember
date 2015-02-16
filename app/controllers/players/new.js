import Ember from 'ember';

export default Ember.Controller.extend({
  name: null,
  number: null,

  canSave: Ember.computed.and('name', 'number'),

  actions: {
    savePlayer: function() {
      var self = this;

      if(!this.get('canSave')) {
        return alert('Both fields required');
      }

      this.store.createRecord('player', {
        name: self.get('name'),
        number: self.get('number')
      }).save().then(function() {
        self.setProperties({
          name: null,
          number: null
        });
      }, function() {
        alert('Unable to Save');
      });
    }
  }
});
