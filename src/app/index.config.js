(function() {
  'use strict';

  angular
    .module('eomsGulpSass')
    .config(config).config(authConfig)
    .factory('AuthInterceptor', function($rootScope, $q,
      AUTH_EVENTS) {
      return {
        responseError: function(response) {
          $rootScope.$broadcast({
            401: AUTH_EVENTS.notAuthenticated,
            403: AUTH_EVENTS.notAuthorized,
            419: AUTH_EVENTS.sessionTimeout,
            440: AUTH_EVENTS.sessionTimeout
          }[response.status], response);
          return $q.reject(response);
        }
      };
    });

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

  function authConfig($httpProvider) {
      $httpProvider.interceptors.push([
        '$injector',
        function($injector) {
          return $injector.get('AuthInterceptor');
        }
      ]);
    }
})();