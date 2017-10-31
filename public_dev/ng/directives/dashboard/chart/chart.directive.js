' use strict';

angular.module('crewLinkNgApp')
    .directive('chart', function () {
        return {
            templateUrl: 'ng/directives/dashboard/chart/chart.tmpl.html',
            restrict: 'E',
            controller: function ($scope) {

                console.log("at chart directive");
            }

        };
    });
