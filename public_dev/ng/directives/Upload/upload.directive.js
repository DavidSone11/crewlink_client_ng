' use strict';

var app = angular.module('crewLinkNgApp');
    app.directive('upload', function() {
        return {
            templateUrl: 'ng/directives/Upload/upload.tmpl.html',
            restrict: 'E',
            replace: true,
            controller: function ($scope) {

                console.log("at upload directive");
            }

        };
    });
