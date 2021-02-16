import Route from '@ember/routing/route';

export default class ContactsAjoutRoute extends Route {
  model(){
    return {};
  }

  @action add( contact ){
    let c = this.store.createRecord('contact', contact);
    c.save().then(() => {
      this.transitionTo('contacts');
    });
  }
}
