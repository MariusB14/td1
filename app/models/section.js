import Model, { attr, belongsTo } from '@ember-data/model';

export default class SectionModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @belongsTo('product') product;
}
