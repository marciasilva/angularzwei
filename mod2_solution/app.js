(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;
  var toBuyMessage = "Everything is bought!";

  showList.items = ShoppingListCheckOffService.getItemsToBuy();

  showList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItems = this;
  boughtItems.items = ShoppingListCheckOffService.getBoughtList();
  var boughtMessage = "Nothing bought yet";
}


function ShoppingListCheckOffService() {
  var service = this;

  var boughtList = [];

  var toBuyList = [
    {
      name:"cookies",
      quantity: 10
    },
    {
      name:"pretzels",
      quantity: 5
    },
    {
      name:"chocolate",
      quantity: 4
    },
    {
      name:"cake",
      quantity: 7
    },
    {
      name:"brownies",
      quantity:2
    },
  ];

  service.buyItem = function (itemIdex) {
    var item = toBuyList[itemIdex];
    boughtList.push(item);
    toBuyList.splice(itemIdex, 1);
  };

  service.getItemsToBuy = function () {
    return toBuyList;
  };

  service.getBoughtList = function(){
    return boughtList;
  };
}

})();
