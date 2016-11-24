(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];


function LunchCheckController($scope) {
  $scope.list = "";
  $scope.amountMsg = "";

  $scope.checkAmount = function(){
    var amount = 0;
    if($scope.list != ""){
      var items = $scope.list.split(',');
      for (var item in items) {
        amount++;
      }
    }
    if(amount == 0){
      $scope.amountMsg = "Please enter data first";
    }
    else if(amount > 3){
      $scope.amountMsg = "Too much!";
    }
    else{
      $scope.amountMsg = "Enjoy!";
    }
  };
}

})();
