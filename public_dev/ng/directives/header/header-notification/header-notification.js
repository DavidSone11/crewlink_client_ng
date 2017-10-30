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
        templateUrl:'ng/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
    	}
	});


