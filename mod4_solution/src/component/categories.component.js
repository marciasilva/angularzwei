
(function(){
  'use strict';

  angular.module('data')
  .component('categoriesList',{
    templateUrl: 'src/templates/categoriesList.template.html',
    bindings: {
      items: '<',
    }
  });
})();
