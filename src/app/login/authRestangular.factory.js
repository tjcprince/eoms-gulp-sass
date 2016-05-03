(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.factory('AuthRestangularFactory', AuthRestangularFactory);

	/** @ngInject*/
	function AuthRestangularFactory(Restangular) {
		return Restangular.withConfig(function(RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('http://10.50.14.19:8080/eoms2016/auth/');
		});
	}

})();