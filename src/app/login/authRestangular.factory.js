(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.factory('AuthRestangularFactory', AuthRestangularFactory);

	/** @ngInject*/
	function AuthRestangularFactory(Restangular) {
		return Restangular.withConfig(function(RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('http://localhost:8080/eoms2016/auth/');
		});
	}

})();