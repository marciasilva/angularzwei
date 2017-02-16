
(function(){
  'use strict';

  angular.module('data')
  .component('itemsList',{
    templateUrl: 'items.html',
    controller: ItemsController,
    bindings: {
      items: '<',
    }
  });


  function ItemsController(){
    var $ctrl = this;

  }

})();
