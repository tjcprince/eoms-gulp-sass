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

    vm.test1 = test1;

    function test1() {
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
      name: "运行维护类流程",
      link: "#",
      subtree: [{
        name: "集中化故障工单",
        link: "home.ngtable({homeid:0})"
      }, {
        name: "投诉处理工单",
        link: "#"
      }, {
        name: "网络优化",
        link: "#"
      }, {
        name: "家宽投诉处理工单",
        link: "#"
      }]
    }, {
      name: "业务实现类流程",
      link: "#",
      subtree: [{
        name: "新业务试点工单",
        link: "#"
      },{
        name: "新业务正式实施工单",
        link: "#"
      },{
        name: "网络数据管理工单",
        link: "#"
      },{
        name: "电路调度工单",
        link: "#"
      }
      ]
    }, {
      name: "divider",
      link: "#"

    }, {
      name: "管理支撑类流程",
      link: "#"
    }, {
      name: "divider",
      link: "#"
    }, {
      name: "任务类流程",
      link: "#"
    }];
vm.navtree1 = [{
      name: "网元管理",
      link: "＃"
    }, {
      name: "制定",
      link: "home.anchorpage({homeid:0})"
    }, {
      name: "审批",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    }, {
      name: "执行",
      link: "#"
    } ];
vm.navtree2 = [{
      name: "全屏切换",
      link: "home.fullpage({homeid:0})"
    }, {
      name: "锚点切换",
      link: "home.anchorpage({homeid:0})"
    }, {
      name: "第三屏",
      link: "#"
    }, {
      name: "第四屏",
      link: "#"
    } ];

    // $state.go("home.fullpage", {
    //   'homeid': 0
    // });

   
  }
})();