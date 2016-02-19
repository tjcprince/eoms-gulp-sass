(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController($log, LoginService, $state, AUTH_EVENTS, $rootScope, wsCache) {
		var vm = this;
		vm.userInfo = {
			username: "",
			password: ""
		};
		vm.login = login;
		vm.loginData = [];

		function login() {
			return getLogin().then(function() {
				var loginStatus = vm.loginData[0].loginStatus;
				if (loginStatus == "1") {
					$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
					// 缓存 到 'user' 中, 超时时间3600秒
					wsCache.set('user', angular.toJson(vm.loginData[0]), {
						exp: 3600
					});

					$state.go('home');
				}
			}, function() {
				$rootScope.$broadcast(AUTH_EVENTS.loginFailed);

			});
		}

		function getLogin() {
			return LoginService.getLogin(vm.userInfo)
				.then(function(data) {
					vm.loginData = data;
					return vm.loginData;
				});
		}

	}
})();