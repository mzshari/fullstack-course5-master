(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);
SignupController.$inject = ['MenuService'];
var completed = false;
function SignupController(MenuService) {
  var signupCtrl = this;
  // signupCtrl.completed = true;

signupCtrl.submit = function () {
//  signupCtrl.completed = MenuService.setUserInfo(signupCtrl.user);

  MenuService.setUserInfo(signupCtrl.user).then(function(){
      var result =  MenuService.getResult();
      if (result)
      {
        signupCtrl.completed = true;
        signupCtrl.favoriteError = false;

      }
      else {
        signupCtrl.completed = false;
        signupCtrl.favoriteError = true;
        }
  })

};
}


})();
