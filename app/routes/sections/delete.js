import Route from '@ember/routing/route';

export default class SectionsDeleteRoute extends Route {
  modele(){
    return {};
  }

  @action delete( section ){
    section.deleteRecord();
  }
}
