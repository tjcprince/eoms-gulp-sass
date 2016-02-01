(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.controller('BookTypeController', BookTypeController);

	/** @ngInject */
	function BookTypeController($log, $state) {
		$log.info("booktype-----");
		$state.go("home.main.booklist.bookgrid",{bookTypeId:0});	
	}
})();