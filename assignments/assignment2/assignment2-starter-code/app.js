(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;
  buyList.items = ShoppingListCheckOffService.getBuyItems();

  buyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var buyItems = [{name:"apples", quantity:"2"},{name:"oranges", quantity:"10"},{name:"lemons", quantity:"6"},{name:"bell peppers", quantity:"2"},{name:"onions", quantity:"4"},{name:"watermelon", quantity:"1"},{name:"tomatoes", quantity:"10"}];
  var boughtItems = [];

  service.buyItem = function (itemIdex) {
    var item = {
      name: buyItems[itemIdex].name,
      quantity: buyItems[itemIdex].quantity
    };
    //to do boughtItems.push(buyItems[itemIdex]);
    boughtItems.push(item);
    buyItems.splice(itemIdex, 1);

  };

  service.getBuyItems = function () {
    return buyItems;
  };

    service.getBoughtItems = function () {
      return boughtItems;
    };
}

})();
