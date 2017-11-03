' use strict';

var app = ngular.module('crewLinkNgApp');
    app.directive('upload', function() {
        return {
            templateUrl: 'ng/directives/dashboard/Upload/upload.tmpl.html',
            restrict: 'E',
            controller: function ($scope) {

                console.log("at chart directive");
            }

        };
    });
