' use strict';
/**
 * @ngdoc overview
 * @name crewLinkNgApp
 * @description
 * # crewLinkNgApp
 *
 * Main module of the application.
 */
var app = angular
  .module('crewLinkNgApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'toaster',
    'base64'
  ]);
app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$qProvider', '$httpProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $qProvider, $httpProvider, $locationProvider) {

  $ocLazyLoadProvider.config({
    debug: false,
    events: true,
  });
  $qProvider.errorOnUnhandledRejections(false); /// error handling for Angular-ui-router

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $locationProvider.html5Mode(false).hashPrefix('!');


  /// if server Not started 
  $httpProvider.interceptors.push(function ($q, $rootScope) {
    return {
      responseError: function (rejection) {
        if (rejection.status <= 0) {
          $rootScope.$emit('httpConnection:error', rejection);
        }
        return $q.reject(rejection);
      }
    };
  });


  ///$urlRouterProvider.otherwise('/dashboard/home');
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'ng/directives/dashboard/dashboard.tmpl.html',
      resolve: {
        loadMyDirectives: function ($ocLazyLoad) {
          return $ocLazyLoad.load(
            {
              name: 'crewLinkNgApp',
              files: [
                'ng/directives/header/header.js',
                'ng/directives/header/header-notification/header-notification.js',
                'ng/directives/sidebar/sidebar.js',
                'ng/directives/sidebar/sidebar-search/sidebar-search.js',
                'ng/utility/currentstate.prototype.js'

              ]
            }),
            $ocLazyLoad.load(
              {
                name: 'toggle-switch',
                files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                  "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                ]
              }),
            $ocLazyLoad.load(
              {
                name: 'ngAnimate',
                files: ['bower_components/angular-animate/angular-animate.js']
              })
          $ocLazyLoad.load(
            {
              name: 'ngCookies',
              files: ['bower_components/angular-cookies/angular-cookies.js']
            });
          $ocLazyLoad.load(
            {
              name: 'ngResource',
              files: ['bower_components/angular-resource/angular-resource.js']
            })
          $ocLazyLoad.load(
            {
              name: 'ngSanitize',
              files: ['bower_components/angular-sanitize/angular-sanitize.js']
            });
          $ocLazyLoad.load(
            {
              name: 'ngTouch',
              files: ['bower_components/angular-touch/angular-touch.js']
            });


        }
      }
    })
    .state('dashboard.home', {
      url: '/home',
      controller: 'homeCtrl',
      //controllerAs:"list",
      templateUrl: 'ng/directives/home/home.tmpl.html',
      resolve: {
        loadMyFiles: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'crewLinkNgApp',
            files: [
              'ng/controllers/home.js',
              'ng/directives/timeline/timeline.js',
              'ng/directives/notifications/notifications.js',
              'ng/directives/dashboard/stats/stats.js',

            ]
          });
        }
      }
    })
    .state('dashboard.form', {
      templateUrl: 'ng/directives/form.html',
      url: '/form'
    })
    .state('dashboard.blank', {
      templateUrl: 'ng/directives/blank/blank.directive.html',
      url: '/blank',
      resolve: {
        loadMyFiles: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'crewLinkNgApp',
            files: [

              'ng/directives/blank/blank.directive.js',
            ]
          });
        }
      }
    })
    .state('login', {
      templateUrl: 'ng/directives/login/login.directive.html',
      url: '/login',
      controller: 'loginCtrl',
      resolve: {
        loadMyFiles: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'crewLinkNgApp',
            files: [
              'ng/controllers/login.controller.js',
              'ng/directives/login/login.directive.js',
            ]
          });
        }
      }
    })
    .state('dashboard.chart', {
      templateUrl: 'ng/directives/dashboard/chart/chart.directive.html',
      url: '/chart',
      controller: 'ChartCtrl',
      resolve: {
        loadMyFile: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'chart.js',
            files: [
              'bower_components/angular-chart.js/dist/angular-chart.min.js',
              'bower_components/angular-chart.js/dist/angular-chart.css'
            ]
          }),
            $ocLazyLoad.load({
              name: 'crewLinkNgApp',
              files: ['ng/controllers/chart.contoller.js',
                'ng/directives/dashboard/chart/chart.directive.js'
              ]
            });
        }
      }
    })
    .state('dashboard.registration', {
      templateUrl: 'ng/directives/registration/registration.directive.html',
      url: '/registration',
      controller: 'RegistrationController',
      resolve: {
        loadMyFile: function ($ocLazyLoad) {
          return $ocLazyLoad.load({

            name: 'crewLinkNgApp',
            files: [
              'ng/controllers/registration.controller.js',
              'ng/directives/registration/registration.directive.js',
              'ng/customdirective/switch.js',
              'ng/customdirective/custom_switch.js'
            ]
          });

        }
      }
    }).state('dashboard.userChat', {
      templateUrl: 'ng/directives/chat/chat.directive.html',
      url: '/chat',
      resolve: {
        loadMyFile: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'crewLinkNgApp',
            files: [
              'ng/directives/chat/chat.directive.js',

            ]
          });

        }
      }
    }).state('dashboard.userUpload', {
      templateUrl: 'ng/directives/Upload/upload.directive.html',
      url: '/upload',
      resolve: {
        loadMyFile: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'crewLinkNgApp',
            files: [
              'ng/directives/Upload/upload.directive.js',

            ]
          });

        }
      }
    })
    .state('dashboard.userplan', {
      template: '<user-plan></user-plan>',
      url: '/plan',
      resolve: {
        loadMyFile: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'crewLinkNgApp',
            files: [
              'ng/directives/UserPlan/userPlan.directive.js',

            ]
          });

        }
      }
    })

    .state('dashboard.panels-wells', {
      templateUrl: 'ng/directives/ui-elements/panels-wells.html',
      url: '/panels-wells'
    })
    .state('dashboard.buttons', {
      templateUrl: 'ng/directives/ui-elements/buttons.html',
      url: '/buttons'
    })
    .state('dashboard.notifications', {
      templateUrl: 'ng/directives/ui-elements/notifications.html',
      url: '/notifications'
    })
    .state('dashboard.typography', {
      templateUrl: 'ng/directives/ui-elements/typography.html',
      url: '/typography'
    })
    .state('dashboard.icons', {
      templateUrl: 'ng/directives/ui-elements/icons.html',
      url: '/icons'
    })
    .state('dashboard.grid', {
      templateUrl: 'ng/directives/ui-elements/grid.html',
      url: '/grid'
    })
}]);

app.run(['$rootScope', '$location', function AppRun($rootScope, $location) {
  $rootScope.$on('$routeChangeStart', function (event) {
    debugger;
    console.log("Inside Root scope");
  });
}]);


