import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BeerViewComponent extends Component {
  beer = null;

  @tracked selected = false;

  @action
  handleClick() {
    this.selected = !this.selected;
  }
}
