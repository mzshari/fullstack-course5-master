(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


// CategoriesController.$inject = [];
// function CategoriesController() {
//   console.log("CategoriesController runs!")
// }

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  console.log("CategoriesController runs!")
  var menu = this;
  menu.categories = categories;
}

})();
