(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);
SignupController.$inject = ['MenuService'];

function SignupController(MenuService) {
  var signupCtrl = this;

signupCtrl.submit = function () {
  var isFavoriteValid = MenuService.checkDishNumber(signupCtrl.user.favorite);
  signupCtrl.favoriteError = MenuService.getResult();
signupCtrl.completed = !signupCtrl.favoriteError;
if (signupCtrl.completed)
MenuService.setUserInfo(signupCtrl.user);

};
}


})();
