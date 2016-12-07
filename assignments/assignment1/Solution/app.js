(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.stateOfLunch = "";
  $scope.lunchItems = "";

  $scope.checkLunch = function () {
    var items = $scope.lunchItems.split(",");
var count = 0;
    for (var i = 0; i < items.length; i++ ){
      if (items[i].trim()!="")
      count++;
    }
    $scope.border = "solid";
    $scope.color = "green";

    if (count>3){
      $scope.stateOfLunch = "Too much!";
    }
    else if (count === 0){
      $scope.stateOfLunch = "Please enter data first";
      $scope.color = "red";

    }
    else{
      $scope.stateOfLunch = "Enjoy!";
    }

  };
}

})();
