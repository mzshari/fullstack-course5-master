(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var favoritetitle = "";
  var favoritedesc = "";
  var user = {};
  var result = 0;
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.setUserInfo = function (userinfo) {
    var menuItems;
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      menuItems = response.data;
      for (var i = 0; i < menuItems.menu_items.length; i++ )
          {
             if (menuItems.menu_items[i].short_name.toLowerCase() === userinfo.favorite.toLowerCase())
            {
              // console.log(menuItems.menu_items[i].short_name);
              userinfo.favoritetitle = menuItems.menu_items[i].name;
              userinfo.favoritedesc = menuItems.menu_items[i].description;
              userinfo.favorite = userinfo.favorite.toUpperCase()

              service.user = userinfo;
              console.log(service.user);
              service.result = true;
              return true;
            }
          }
          service.user = null;
          service.result = false;
      return false;
  })
};

  service.getUserInfo = function () {
  // if (service.user)
  // {
  //   service.user.favoritetitle = service.favoritetitle;
  //   service.user.favoritedesc = service.favoritedesc;
  //   service.user.favorite = service.user.favorite.toUpperCase()
  // }

    return service.user;
  };

  service.getResult = function () {
    return service.result;
  };

  // service.checkDishNumber = function (searchTerm) {
  //   var menuItems;
  //   return $http.get(ApiPath + '/menu_items.json').then(function (response) {
  //     menuItems = response.data;
  //     for (var i = 0; i < menuItems.menu_items.length; i++ )
  //         {
  //            if (menuItems.menu_items[i].short_name.toLowerCase() === searchTerm.toLowerCase())
  //           {
  //             console.log(menuItems.menu_items[i].short_name);
  //             service.favoritetitle = menuItems.menu_items[i].name;
  //             service.favoritedesc = menuItems.menu_items[i].description;
  //             service.result = 1;
  //             return;
  //           }
  //         }
  //     service.result = 0;
  //     return;
  //
  //   });
  //
  // };

}



})();
