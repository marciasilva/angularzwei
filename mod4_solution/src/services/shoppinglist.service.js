(function () {
'use strict';

angular.module('data')
.service('ShoppingListService', ShoppingListService);


ShoppingListService.$inject = ['$q', '$timeout']
function ShoppingListService($q, $timeout) {
  var service = this;

  // List of shopping items
  var items = [];

  service.getAllCategories = function(){
      return $http({
        method: 'GET',
        url: ("https://davids-restaurant.herokuapp.com/categories.json")
      }).then(function successCallback(response){
        return response;
      },function errorCallback(response){

      }
      );
    };


  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
}

})();
