import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = [];
  selected = [];
  id = 'id';

  constructor() {
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  @action
  change(event) {
    let select = event.target;
    //récupération des ids sélectionnés dans le select html
    var selectedIds = [...select.selectedOptions].map(option => option.value);
    //Appel de la méthode onChange
    if (this.args.onChange) {
      // filtrage et récupération des éléments sélectionnés de notre liste en vérifiant si leur id est égal à un selected id
      this.args.onChange(this.elements.filter(elm => selectedIds.filter(e => e == elm[this.id]).length > 0));
    }
  }
}
