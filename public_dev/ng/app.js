(function () {
  " use strict";
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
      'base64',
      'validation.match',
      'chart.js'

    ]);
  app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider', '$locationProvider', 'ChartJsProvider', 'cfpLoadingBarProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider, $locationProvider, ChartJsProvider, cfpLoadingBarProvider) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
    });
    //$qProvider.errorOnUnhandledRejections(false); /// error handling for Angular-ui-router

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $locationProvider.html5Mode(false).hashPrefix('!');
    //ChartJsProvider.setOptions({ colors : [ '#FF0000', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });

    ChartJsProvider.setOptions({
      colours: ['#FF5252', '#FF8A80'],
      responsive: true
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
    cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner fa-2x">Loading...</div>';

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
                  'ng/directives/left-sidebar/left-sidebar.js',
                  'ng/directives/left-sidebar/left-sidebar-search/left-sidebar-search.js',
                  'ng/directives/right-sidebar/right-sidebar.js',
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
        controller: 'HomeController',
        //controllerAs:"list",
        templateUrl: 'ng/directives/home/home.tmpl.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkNgApp',
              files: [
                'ng/controllers/home.controller.js',
                'ng/directives/timeline/timeline.js',
                'ng/directives/notifications/notifications.js',
                'ng/directives/dashboard/stats/stats.js',

              ]
            });
          }
        }
      })
      .state('dashboard.form', {
        templateUrl: 'ng/directives/form.tmpl.html',
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
        controller: 'LoginController',
        data: {
          pageTitle: 'Login'
        },
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

      .state('dashboard.registration', {
        templateUrl: 'ng/directives/registration/registration.directive.html',
        url: '/registration',
        controller: 'RegistrationController',
        data: {
          pageTitle: 'Registration'
        },
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
        data: {
          pageTitle: 'Chat'
        },
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
      }).state('dashboard.userChart', {
        templateUrl: 'ng/directives/userchart/userchart.directive.html',
        url: '/chart',
        controller: 'UserChartController',
        data: {
          pageTitle: 'Chart'
        },
        resolve: {
          loadMyFile: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkNgApp',
              files: [
                'ng/directives/userchart/userchart.directive.js',
                'ng/controllers/userchart.controller.js',

              ]
            });

          }
        }
      }).state('dashboard.userUpload', {
        templateUrl: 'ng/directives/Upload/upload.directive.html',
        url: '/upload',
        controller:'UploadController',
        data: {
          pageTitle: 'Upload'
      },
        resolve: {
          loadMyFile: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkNgApp',
              files: [
                'ng/directives/Upload/upload.directive.js',
                'ng/controllers/upload.controller.js',

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
})();

