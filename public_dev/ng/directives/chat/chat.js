'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('crewLinkNgApp')
	.directive('chat',function(){
		return {
        templateUrl:'ng/directives/chat/chat.html',
        restrict: 'E',
        replace: true,
    	}
	});


