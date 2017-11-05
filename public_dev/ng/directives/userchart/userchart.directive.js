' use strict';

var app = angular.module('crewLinkNgApp')
    app.directive('userChart', function() {
        return {
            templateUrl: 'ng/directives/userchart/userchart.tmpl.html',
            restrict: 'E',
            controller: function ($scope,$timeout) {

                console.log("at user chart controller directive");
            }

        };
    });
