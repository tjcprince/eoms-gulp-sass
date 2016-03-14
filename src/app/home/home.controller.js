(function() {
  'use strict';

  angular
    .module('eomsGulpSass')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, $state, UserRestangularFactory, $http) {
    var vm = this;
    
    vm.test = test;

    function test() {
      $http({
        method: 'GET',
        url: 'http://localhost:8080/eoms2016/auth/getUser',
        params: {
          'username': 'tan'
        }
      }).then(function(users) {
        $log.info(users);
        $log.info("getuser-Success");
        // for (var i = 0; i < users.length; i++) {
        //  $log.info(users[i]);
        // }
      });
    }

    vm.test1=test1;
    function test1(){
      UserRestangularFactory.all('getUser').getList({
        username: "tan@163.com"
      }) // GET: /users
      .then(function(users) {
        $log.info(users);
        $log.info("getuser-Success");
        // for (var i = 0; i < users.length; i++) {
        //  $log.info(users[i]);
        // }
      })
    }


    vm.navtree = [{
      name: "菜单",
      link: "#",
      subtree: [{
        name: "菜单0",
        link: "#"
      }, {
        name: "菜单1",
        link: "#"
      }]
    }, {
      name: "No states",
      link: "#",
      subtree: [{
        name: "no state connected",
        link: "#"
      }]
    }, {
      name: "divider",
      link: "#"

    }, {
      name: "State has not been set up",
      link: "#"
    }, {
      name: "divider",
      link: "#"
    }, {
      name: "Here again no state set up",
      link: "#"
    }];

    $state.go("home.main", {
      'homeid': 0
    });

  }
})();