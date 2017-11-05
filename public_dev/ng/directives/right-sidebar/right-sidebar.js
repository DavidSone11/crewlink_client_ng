' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the crewLinkNgApp
 */
var app = angular.module('crewLinkNgApp');
app.directive('rightSideBar', function ($scope, $timeout) {

    return {
        templateUrl: 'ng/directives/right-sidebar/rightsidebar.tmpl.html',
        restrict: 'E',
        controller: function ($scope) {




        }

    };




});
