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


        


        $scope.line = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            series: ['Series A', 'Series B'],
            options: { legend: { display: true } },
            onClick: function (points, evt) {
                console.log(points, evt);
            },
            // Simulate async data update
            load: function (evt) {
                var _this = this;
                $timeout(function (_this) {
                   return data = [
                        [28, 48, 40, 19, 86, 27, 90],
                        [65, 59, 80, 81, 56, 55, 40]
                    ];
                   
                },5000, this);
                
            },

        };

        $scope.bar = {
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            series: ['Series A', 'Series B'],
            options: { legend: { display: true } },
            data: [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ],
            onClick: function (points, evt) {
                console.log(points, evt);
            }

        };

        $scope.donut = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100],
            options: { legend: { display: true } },
        };

        $scope.radar = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

            data: [
                [65, 59, 90, 81, 56, 55, 40],
                [28, 48, 40, 19, 96, 27, 100]
            ]
        };

        $scope.pie = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100]
        };

        $scope.polar = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
            data: [300, 500, 100, 40, 120]
        };

        $scope.dynamic = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
            data: [300, 500, 100, 40, 120],
            type: 'PolarArea',

            toggle: function () {
                this.type = this.type === 'PolarArea' ?
                    'Pie' : 'PolarArea';
            }
        };



    });
