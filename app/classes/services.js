export default class Services {
  services=[];

  constructor(serv){
    this.services=serv;
  }

  get countActive(){
    return  this.services.filterBy('active', true).length;
  }

  get sommeActive(){
    let total = 0;
    let serviceActif = this.services.filterBy('active', true);
    serviceActif.forEach(s => {total += s.price; });
    return total;
  }

}
