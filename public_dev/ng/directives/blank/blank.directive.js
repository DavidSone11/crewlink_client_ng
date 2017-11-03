' use strict';

var app = angular.module('crewLinkNgApp')
    app.directive('blank', function() {
        return {
            templateUrl: 'ng/directives/blank/blank.tmpl.html',
            restrict: 'E',
            controller: function ($scope) {

                console.log("at blank directive");
            }

        };
    });
