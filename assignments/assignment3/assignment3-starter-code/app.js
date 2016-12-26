(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('resultList', ResultListDirective);


function ResultListDirective() {
  var ddo = {
    templateUrl: 'resultList.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['$scope' , 'MenuSearchService'];

function NarrowItDownController($scope ,MenuSearchService) {
  $scope.nothingFound = false;

  var menu = this;
  menu.removeItem = function (itemIndex) {
      menu.foundResults.splice(itemIndex, 1);
  };

  menu.search = function (searchTerm) {


  var promise =  MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function (response) {
      menu.foundResults = response;
        menu.errorMessage ="";
      console.log(response);
    })
    .catch(function (error) {
      menu.foundResults= "";
        menu.errorMessage = "Nothing found!";
        console.log(error);

    });
  }
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService( $http, ApiBasePath) {
  var service = this;

    service.getMatchedMenuItems = function (searchTerm) {

    return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
        }).then(function (result)
        {
          if (!searchTerm   || searchTerm === "" )
          {
            throw new Error("search term is empty!");
            return;
          }
          var found  = [];
          for (var i = 0; i < result.data.menu_items.length; i++ )
          {
             if (result.data.menu_items[i].description.includes(searchTerm))
             found.push(result.data.menu_items[i]);
          }
          if (found.length === 0 )
              throw new Error("search result array is empty!");

          return found;

        });
    };

}


})();
