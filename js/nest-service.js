(function() {
    'use strict';
	function NestService($http) {
		 var service = {};
		service.nestaction = function(action,temp){
		 
		 if (action == 'away'){
			$http.get('http://127.0.0.1/nest/Nest.php?action=away')
		 }else if (action == 'home'){
			$http.get('http://127.0.0.1/nest/Nest.php?action=home') 
		 }
		 
		

		}
		return service;
	}
	    angular.module('SmartMirror')
        .factory('NestService', NestService);
}());