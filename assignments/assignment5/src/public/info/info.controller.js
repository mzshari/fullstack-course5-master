(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);
InfoController.$inject = ['MenuService','ApiPath'];

function InfoController(MenuService, ApiPath) {
  var infoCtrl = this;
  infoCtrl.user =  MenuService.getUserInfo();
  infoCtrl.basePath = ApiPath;
}
})();
