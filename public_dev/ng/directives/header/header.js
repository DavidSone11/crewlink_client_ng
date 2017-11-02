' use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
var app = angular.module('crewLinkNgApp');
	app.directive('header',function(){
		return {
        templateUrl:'ng/directives/header/header.tmpl.html',
        restrict: 'E',
        replace: true,
    	};
	});


