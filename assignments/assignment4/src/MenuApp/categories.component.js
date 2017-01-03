(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
   templateUrl: 'src/MenuApp/templates/categories.template.html',
    controller: CategoriesListComponentController,
   bindings: {
    categories: '<'
   }
});

  function CategoriesListComponentController() {
    var $ctrl = this;
    console.log($ctrl);
    console.log($ctrl.categories);
  }

})();
