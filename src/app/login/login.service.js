(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.service('LoginService', LoginService);

	/** @ngInject*/
	function LoginService($http, $log, wsCache) {

		var service = {
			getLogin: getLogin,
			isAuthenticated: isAuthenticated,
			isAuthorized: isAuthorized
		};

		return service;

		function getLogin(userInfo) {
			$log.info(userInfo);
			return $http.get('app/data/login.json').then(getLoginComplete)
				.catch(getLoginFailed);

			function getLoginComplete(response) {
				return response.data.user;
			}

			function getLoginFailed(error) {
				$log.error('XHR Failed for getAvengers.' + error.data);
			}
		}

		function isAuthenticated() {
			return !!angular.fromJson(wsCache.get('user')).userId;
		}

		function isAuthorized(authorizedRoles) {
			if (!angular.isArray(authorizedRoles)) {
				authorizedRoles = [authorizedRoles];
			}
			return (isAuthenticated() &&
				authorizedRoles.indexOf(angular.fromJson(wsCache.get('user')).userRole) !== -1);
		}

	}

})();