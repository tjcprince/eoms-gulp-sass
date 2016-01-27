(function() {
  'use strict';

  angular
    .module('eomsGulpSass')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, $state) {
    var vm = this;

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