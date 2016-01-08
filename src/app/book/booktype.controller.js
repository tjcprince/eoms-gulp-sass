(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.controller('BookTypeController', BookTypeController);

	/** @ngInject */
	function BookTypeController($log, $state) {
		$state.go("home.booklist.bookgrid",{bookTypeId:0});	
	}
})();