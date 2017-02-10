
(function(){
  'use strict';

  angular.module('data')
  .component('categoriesList',{
    templateUrl: 'categories.html',
    controller: CategoriesController,
    bindings: {
      items: '<',
      myTitle:'@title',
    }
  });


  function CategoriesController(){
    var $ctrl = this;


    $ctrl.$onInit = function(){
      console.log("We are in $onInit() categories.component");
    }

    $ctrl.$onChanges = function(changeObj){
      console.log(changeObj);
    }

  }

})();
