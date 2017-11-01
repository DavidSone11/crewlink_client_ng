' use strict';
/**
 * @ngdoc overview
 * @name crewLinkNgApp
 * @description
 * # crewLinkNgApp
 *
 * Main module of the application.
 */
angular
  .module('crewLinkNgApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'toaster',
    'base64'

  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
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
                  'ng/directives/sidebar/sidebar-search/sidebar-search.js'
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
        templateUrl: 'ng/directives/home/home.tmpl.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkNgApp',
              files: [
                'ng/controllers/home.js',
                'ng/directives/timeline/timeline.js',
                'ng/directives/notifications/notifications.js',
                'ng/directives/chat/chat.js',
                'ng/directives/dashboard/stats/stats.js'
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
        templateUrl: 'ng/directives/pages/blank.html',
        url: '/blank'
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
              name: 'crewLinkNgApp',
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
        controller: 'registrationCtrl',
        resolve: {
          loadMyFile: function ($ocLazyLoad) {
            return $ocLazyLoad.load({

              name: 'crewLinkNgApp',
              files: ['ng/controllers/registration.controller.js',
                'ng/directives/registration/registration.directive.js'
              ]
            });

          }
        }
      })


      .state('dashboard.table', {
        templateUrl: 'ng/directives/table.html',
        url: '/table'
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


