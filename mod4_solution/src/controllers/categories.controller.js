(function (){
  'use strict';

  angular.module('data')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['itemsResolve'];
  function CategoriesController(itemsResolve) {
    var categoriesList = this;
    categoriesList.items = itemsResolve;
  }
})();
