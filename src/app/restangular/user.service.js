(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.service('UserService', UserService);

	/** @ngInject*/
	function UserService(Restangular,$log) {
		var service = {
			getUser: getUser
		};
		return service;
		function getUser() {
			Restangular.all('test').getList() // GET: /users
				.then(function(users) {
					for (var i = 0; i < users.length; i++) {
						$log.info(users[i]);
					}
				})
		}
	}

})();