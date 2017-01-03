(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/MenuApp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/MenuApp/templates/main-categories.template.html',
    controller: 'CategoriesController as categories',
     resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
               return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('categories.items', {
    url: '/items/{itemShortName}',
    templateUrl: 'src/MenuApp/templates/items.template.html',
    controller: "ItemsController as itemsctrl",
    resolve: {
     items: ['MenuDataService', '$stateParams', function (MenuDataService , $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.itemShortName);
     }]
  }});

}

})();
