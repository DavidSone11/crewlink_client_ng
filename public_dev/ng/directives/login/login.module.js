' use strict';

var app = angular.module('login', ['oc.lazyLoad', 'ui.router']);
app.config(["$stateProvider", "$ocLazyLoadProvider", function ($stateProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
    });
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'ng/directives/login/login.directive.html',
        controller: 'LoginController',
        data: {
            pageTitle: 'Login'
        }, resolve: {
            loadMyFile: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'login',
                    files: [
                        'ng/directives/login/login.directive.js',
                        'ng/controllers/login.controller.js'

                    ]
                });

            }
        }
    });

}]);
