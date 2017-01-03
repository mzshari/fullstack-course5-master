(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams', 'items'];
function ItemsController($stateParams, items) {
  console.log(items);
  var itemsctrl = this;
    itemsctrl.items = items.menu_items;
    itemsctrl.name = items.category.name;
}

})();
