import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  number: DS.attr(),
  created_at: DS.attr(),
  shots: DS.hasMany({async: true, inverse: 'player'})
});
