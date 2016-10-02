(function() {
	'use strict';
	var GalleryApp = angular.module("gallery", ["ngRoute"]);

	GalleryApp.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when("/", {
				controller:		"HomeCtrl",
				templateUrl:	"partials/_home.html"
			})
			.when("/our-relationships", {
				controller:		"OurRelationshipsCtrl",
				templateUrl: "partials/_our-relationships.html"
			})
			.when("/at-your-service", {
				controller:		"AtYourServiceCtrl",
				templateUrl: "partials/_at-your-service.html"
			})
			.otherwise({
				redirectTo: "/"
			});
	}]);

	GalleryApp.controller('HomeCtrl', [function(){
		$(".fullscreen-bg").show();
	}]);

	GalleryApp.controller('OurRelationshipsCtrl', [function(){
		$(".fullscreen-bg").hide();
		$("body").css("background", "url('img/our_relationships_backgroup.png') 0% 0% / cover no-repeat");
	}]);

	GalleryApp.controller('AtYourServiceCtrl', [function(){
		$(".fullscreen-bg").hide();
		$("body").css("background", "url('img/at_your_service_backgroup.png') 0% 0% / cover no-repeat");
	}]);



})();