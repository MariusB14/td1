import { helper } from '@ember/component/helper';

export default helper(function plural(params/*, hash*/) {
  let [count, zero, one, other] = params;
  switch(count){
    case 0:
      return "Aucun service sélectionné";
    case 1:
      return "";
  }
  return params;
});
