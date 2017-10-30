'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('crewLinkNgApp')
	.directive('timeline',function() {
    return {
        templateUrl:'ng/directives/timeline/timeline.html',
        restrict: 'E',
        replace: true,
    }
  });
