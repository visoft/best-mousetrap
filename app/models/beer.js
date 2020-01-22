import Model, { attr } from '@ember-data/model';

export default class BeerModel extends Model {
  @attr('string') name;
  @attr('string') tagline;
  @attr('string') description;
  @attr('string') image_url;
}
