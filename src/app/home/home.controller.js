(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.controller('HomeController', HomeController);

	/** @ngInject */
	function HomeController($log, $state,$location) {
		var vm = this;
$log.info($location.path());
	vm.isActive = function (viewLocation) { 
		var flag=$location.path().indexOf(viewLocation);
        return flag==0;
    };

		vm.titleArray = [{
			name: "首页",
			id: 0
		}, {
			name: "列表",
			id: 1
		}];

		$state.go("home.booklist",{'id':0});
	}
})();