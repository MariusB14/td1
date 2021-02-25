import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesContactsRoute extends Route {

  model(params){
    return this.store.find('cataegory', params.category_id);
  }

  @action delete(contact) {
    contact.deleteRecord();
  }

  @action cancelDeletion(deleteds){
    deleteds.forEach((item, i) => {
      item.rollbackAttributes();
    });
  }

}
