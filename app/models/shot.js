import DS from 'ember-data';

export default DS.Model.extend({
  made: DS.attr('boolean', { default: false }),
  shot_type: DS.attr(),
  player: DS.belongsTo('player'),

  score: function() {
    if(!this.get('made')) {
      return 0;
    }

    switch(this.get('shot_type')) {
      case 'ft':
        return 1;
      case 'fg':
        return 2;
      default:
        return 3;
    }

  }.property('made', 'shot_type')
});
