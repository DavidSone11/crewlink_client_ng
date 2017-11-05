'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('crewLinkNgApp')
	.directive('headerNotification',function(){
		return {
        templateUrl:'ng/directives/header/header-notification/header-notification.tmpl.html',
        restrict: 'E',
		replace: false,
		controller:function HeaderNotificationController($scope){
			$scope.colorpallet = "Hiiiii";

			$scope.$watch('colorpallet', function (newValue, oldValue) {
				if (newValue != oldValue)
				$scope.colorpallet = newValue;
				console.log($scope.colorpallet);
			}, true);

			
		}
    	}
	});


