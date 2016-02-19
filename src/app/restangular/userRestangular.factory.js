(function() {
	'use strict';

	angular
		.module('eomsGulpSass')
		.factory('UserRestangularFactory', UserRestangularFactory);

	/** @ngInject*/
	function UserRestangularFactory(Restangular) {
		return Restangular.withConfig(function(RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('http://localhost:8080/eoms2016/userController/showUser2.json?id=1');
		});
	}

})();