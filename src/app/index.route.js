(function() {
  'use strict';

  angular
    .module('eomsGulpSass')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, USER_ROLES) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      })
      .state("home", {
        url: "/home",
        views: {
          "": {
            templateUrl: "app/home/home.html",
            controller: 'HomeController',
            controllerAs: 'vm'
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      }).state("home.main", {
        url: "/main/{homeid:[0-9]{1,4}}",
        views: {
          "": {
            templateUrl: "app/main/main.html",
            controller: 'MainController',
            controllerAs: 'vm'
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      })
      .state("home.main.booklist", {
        url: "/booklist/{mainid:[0-9]{1,4}}",
        views: {
          "": {
            templateUrl: "app/book/booklist.html"
          },
          "booktype@home.main.booklist": {
            templateUrl: "app/book/booktype.html",
            controller: 'BookTypeController',
            controllerAs: 'vm'
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      }).state("home.main.booklist.bookgrid", {
        url: "/bookgrid/{bookTypeId:[0-9]{1,4}}",
        views: {
          "": {
            templateUrl: "app/book/bookgrid.html",
            controller: 'BookGridController',
            controllerAs: 'vm'
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      });

    $urlRouterProvider.otherwise('/login');
  }

})();