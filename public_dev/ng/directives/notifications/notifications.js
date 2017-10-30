'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('crewLinkNgApp')
	.directive('notifications',function(){
		return {
        templateUrl:'ng/directives/notifications/notifications.html',
        restrict: 'E',
        replace: true,
    	}
	});


