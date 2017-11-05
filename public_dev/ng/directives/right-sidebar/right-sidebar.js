' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the crewLinkNgApp
 */
var app = angular.module('crewLinkNgApp');
app.directive('rightSideBar', function () {

    return {
        templateUrl: 'ng/directives/right-sidebar/right-sidebar.tmpl.html',
        restrict: 'E',
        replace: true,
        controller: function ($scope) {




        }

    };




});
