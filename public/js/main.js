(function() {
	'use strict';
	var GalleryApp = angular.module("gallery", ["ngRoute", "ngAnimate"]);

	GalleryApp.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when("/", {
				controller:		"HomeCtrl",
				templateUrl:	function(aData) {
					return "partials/_home.html";
				}
			})
			.when("/our-relationships", {
				controller:		"OurRelationshipsCtrl",
				templateUrl: function() {
					return "partials/_our-relationships.html";
				}
			})
			.when("/at-your-service", {
				controller:		"AtYourServiceCtrl",
				templateUrl: function() {
					return "partials/_at-your-service.html";
				}
			})
			.when("/support", {
				controller:		"SupportCtrl",
				templateUrl: function() {
					return "partials/_support.html";
				}
			})
			.otherwise({
				redirectTo: "/"
			});
	}]);

	GalleryApp.controller('HomeCtrl', [function(){
		$(".fullscreen-bg").fadeIn();
	}]);

	GalleryApp.controller('OurRelationshipsCtrl', [function(){
		$(".fullscreen-bg").fadeOut("");
		$("body").css("background", "url('img/our_relationships_backgroup.png') 0% 0% / cover no-repeat");
	}]);

	GalleryApp.controller('AtYourServiceCtrl', [function(){
		$(".fullscreen-bg").fadeOut();
		$("body").css("background", "url('img/at_your_service_backgroup.png') 0% 0% / cover no-repeat");
	}]);

	GalleryApp.controller('SupportCtrl', [function(){
		$(".fullscreen-bg").fadeOut();
		$("body").css("background", "url('img/support_backgroup.png') 0% 0% / cover no-repeat");
	}]);

})();