'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('crewLinkNgApp')
  .directive('leftSideBar', ['$location', function () {
    return {
      templateUrl: 'ng/directives/left-sidebar/left-sidebar.tmpl.html',
      restrict: 'E',
      replace: false,

      controller: function ($scope) {


        $scope.sidebarslist = [
          { Dashboard: 'Dashboard', dashboardClass: 'fa fa-dashboard fa-fw' },
          { Register: 'Register', registerClass: 'fa fa-user fa-fw' },
          { UserPlan: 'UserPlan' ,userPlanClass: 'fa fa-paper-plane-o fa-fw' },
          { Forms: 'Forms',formClass: 'fa fa-edit fa-fw' }
        ];

        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 0;
        $scope.multiCollapseVar = 0;

        $scope.check = function (x) {

          if (x == $scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };

        $scope.multiCheck = function (y) {

          if (y == $scope.multiCollapseVar)
            $scope.multiCollapseVar = 0;
          else
            $scope.multiCollapseVar = y;
        };


      }
    }
  }]);
