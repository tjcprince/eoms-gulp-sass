(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.run(runBlock).run(runStateChangeStart);

	/** @ngInject */
	function runBlock($log) {

		$log.debug('runBlock end');
	}
	/** @ngInject */
	function runStateChangeStart($rootScope, AUTH_EVENTS, LoginService, $log, $state, wsCache) {
		var unbind = $rootScope.$on('$stateChangeStart', function(event, toState) {
			if (toState.name == 'login') return; // 如果是进入登录界面则允许
			var authorizedRoles = toState.data.authorizedRoles;
			if (!wsCache.get('user')) {
				event.preventDefault();
				$state.go("login");
				return;
			} else {
				// 为已存在的（未超时的）缓存值设置新的超时时间。
				wsCache.touch('user', 3600);
				$rootScope.user = angular.fromJson(wsCache.get('user'));
			}
			if (!LoginService.isAuthorized(authorizedRoles)) {
				event.preventDefault();
				if (LoginService.isAuthenticated()) {
					// user is not allowed
					$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
				} else {
					// user is not logged in
					$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
				}
			}
		});
		var $scope = $rootScope.$new();
		$scope.$on('$destroy', unbind);
	}
})();