' use strict';

var app = angular.module('crewLinkNgApp')
    app.directive('userSetting', function() {
        return {
            templateUrl: 'ng/directives/usersettings/usersettings.tmpl.html',
            restrict: 'E',
            replace: false,
            controller: function ($scope,$timeout) {

                console.log("at usersetting");
            }

        };
    });
