(function (){
  'use strict';

  angular.module('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
    function MenuDataService($http){
      var menuService = this;

      menuService.getAllCategories = function(){
        return $http({
          method: 'GET',
          url: ("https://davids-restaurant.herokuapp.com/categories.json")
        }).then(function successCallback(response){
          return response;
        },function errorCallback(response){

        }
        );
      };

      menuService.getItemsForCategory = function(categoryShortName){
        return $http({
          method: 'GET',
          url:("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
        }).then(function successCallback(response){
          return response;
        },function errorCallback(response){

        }

        );
      };
    }
})();
