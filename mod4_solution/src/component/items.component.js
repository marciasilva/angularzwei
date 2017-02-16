
(function(){
  'use strict';

  angular.module('data')
  .component('itemsList',{
    templateUrl: 'src/templates/categoryDetailItems.template.html',
    bindings: {
      items: '<',
    }
  });

})();
