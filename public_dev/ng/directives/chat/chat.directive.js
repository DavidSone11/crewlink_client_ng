' use strict';

angular.module('crewLinkNgApp')
    .directive('chat', function() {
        return {
            templateUrl: 'ng/directives/chat/chat.tmpl.html',
            restrict: 'E',
            controller: function ($scope) {

                console.log("at chart directive");
            }

        };
    });
