' use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
var app = angular.module('crewLinkNgApp');
app.directive('switch', function () {
	return {
		templateUrl: 'ng/customdirective/switch.tmpl.html',
		restrict: 'E',
		replace: true,
		controller: function ($scope) {

		
			$scope.status = true;
			
			$scope.changeStatus = function () {
				$scope.status = !$scope.status;
			};

		
		},


	};
});


