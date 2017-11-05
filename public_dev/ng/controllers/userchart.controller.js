' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the crewLinkNgApp
 */
angular.module('crewLinkNgApp')
  .controller('UserChartController', function ($scope, toaster, $timeout) {


      console.log("user chart contoller");

      
        $scope.line = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            series: ['Series A', 'Series B'],
            options : { legend: { display: true }},
            data: [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ],
            onClick: function (points, evt) {
                console.log(points, evt);
            }
        };
    
     

  });
