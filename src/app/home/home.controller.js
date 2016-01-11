(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.controller('HomeController', HomeController);

	/** @ngInject */
	function HomeController($log, $state) {
		var vm = this;

		vm.titleArray = [{
			name: "首页",
			id: 0
		}, {
			name: "列表",
			id: 1
		}];

		$state.go("home.booklist", {
			'id': 0
		});
	}
})();