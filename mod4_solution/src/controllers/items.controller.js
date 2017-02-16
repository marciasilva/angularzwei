(function (){
  'use strict';

  angular.module('data')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['itemsDetailResolve'];
  function ItemsController(itemsDetailResolve) {
    var categoryItemsList = this;
    categoryItemsList.items = itemsDetailResolve;
  }
})();
