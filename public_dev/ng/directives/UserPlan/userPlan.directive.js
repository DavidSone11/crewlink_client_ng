' use strict';

var app = angular.module('crewLinkNgApp')
    app.directive('userPlan', function() {
        return {
            templateUrl: 'ng/directives/UserPlan/UserPlan.tmpl.html',
            restrict: 'E',
            replace: false,
            controller: function ($scope) {

                console.log("at blank directive");
            }

        };
    });
