' use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
var app = angular.module('crewLinkNgApp');
app.directive('customSwitch', ['$parse', '$http', '$compile', '$templateCache', function($parse, $http, $compile, $templateCache){
	return {
		templateUrl: 'ng/customdirective/custom_switch.tmpl.html',
		restrict: 'E',
		replace: true,
		scope: {
			'status': '@',
		},

		link: function (scope, elem, attrs) {


			console.log('Elements', elem.id);      // 'Elements', videoId
			console.log('Attributes', attrs.id);   // 'Attributes', videoId

			elem.on('click', function (e) {
				if (scope.status == true) {
					angular.element(e.target).removeClass('btn-circle-on');
					angular.element(e.target).addClass('btn-circle-off');
					angular.element(document.querySelector('#toggleElement')).html("OFF");
					scope.status = false;
					//$compile(elem.contents())(scope);

				} else {
					angular.element(e.target).removeClass('btn-circle-off');
					angular.element(e.target).addClass('btn-circle-on');
					angular.element(document.querySelector('#toggleElement')).html("ON");
					scope.status = true;
					//$compile(elem.contents())(scope);
				}

			});

		},
		controller: function ($scope) {


			console.log($scope.$parent.status);


		},


	};
}]);



