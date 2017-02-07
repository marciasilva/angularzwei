(function(){
  'use strict';
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService','$scope'];
  function NarrowItDownController(MenuSearchService,$scope){
    var narrowDownController = this;
    $scope.searchTerm = "";
    $scope.found = [];
    this.getMatchedMenuItems = function(){
      if($scope.searchTerm != ""){
        MenuSearchService.getMatchedMenuItems($scope.searchTerm)
          .then(function(found) {
            $scope.found = found;
          })
        }
      }

    this.removeItem = function(index){
      $scope.found.splice(index,1);
    }
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var menuService = this;
    menuService.getMatchedMenuItems = function(searchTerm){
      return $http({
        method: 'GET',
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        var found = [];
        var allItems = response.data.menu_items;
        for (var i = 0; i < allItems.length; i++){
          var item = allItems[i];
          if(item.description.indexOf(searchTerm) != -1){
            found.push(item);
          }
        }
        return found;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    };
  }

  function FoundItemsDirective(){
    var ddo = {
      templateUrl:"foundItems.html"
    }

    return ddo;
  }

})();
