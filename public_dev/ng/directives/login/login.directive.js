' use strict';

angular.module('crewLinkNgApp')
    .directive('login', function () {
        return {
            templateUrl: 'ng/directives/login/login.tmpl.html',
            restrict: 'E',
            replace:false,
            controller: function ($scope) {

                console.log("at login directive");
            }

        };
    });
