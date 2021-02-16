import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsAjoutRoute extends Route {
  model(){
    return {};
  }

  @action save( contact ){
    let c = this.store.createRecord('contact', contact);
    c.save().then(() => {
      this.transitionTo('contacts');
    });
  }
}
