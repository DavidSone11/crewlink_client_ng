' use strict';

var app = angular.module('crewLinkNgApp')
    app.directive('chat', function() {
        return {
            templateUrl: 'ng/directives/chat/chat.tmpl.html',
            restrict: 'E',
            replace: false,
            controller: function ($scope) {

                console.log("at chart directive");
            }

        };
    });
