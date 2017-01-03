(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService );

MenuDataService.$inject = ['$http','ApiBasePath' ]
function MenuDataService( $http, ApiBasePath) {
  var service = this;
  console.log("MenuDataService fired ");

      this.getAllCategories = function () {
        console.log("getAllCategories fired ");

        return $http({
          method: "GET",
          url: (ApiBasePath + "/categories.json")
        }).then(function (result) {
          console.log(result.data);
              return result.data;
        });
      };

      this.getItemsForCategory = function (categoryShortName) {
        return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
          params: {
            category: categoryShortName
          }
        }).then(function (result) {
            return result.data;
        });
      };
    }

})();
