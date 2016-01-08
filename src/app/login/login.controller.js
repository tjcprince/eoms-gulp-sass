(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController($log, LoginService,$state) {
		var vm = this;
		vm.userInfo = {
			userName: "",
			password: ""
		};
		vm.login = login;
		vm.loginData = [];

		function login() {
			return getLogin().then(function() {
				var loginStatus=vm.loginData[0].loginStatus;
				$log.info('Activated Avengers View');
				if (loginStatus=="1") {
					$log.info('登陆成功！');
					$state.go('home');
				}

			});
		}

		function getLogin() {
			return LoginService.getLogin()
				.then(function(data) {
					vm.loginData = data;
					return vm.loginData;
				});
		}

	}
})();