'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('crewLinkNgApp')
	.directive('header',function(){
		return {
        templateUrl:'ng/directives/header/header.html',
        restrict: 'E',
        replace: true,
    	}
	});


