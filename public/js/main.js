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
			.when("/at-your-service", {
				controller:		"AtYourServiceCtrl",
				templateUrl: function() {
					return "partials/_at-your-service.html";
				}
			})
			.when("/be-the-director", {
				controller:		"BeTheDirectorCtrl",
				templateUrl: function() {
					return "partials/_be-the-director.html";
				}
			})
			.when("/content-management", {
				controller:		"ContentManagementCtrl",
				templateUrl: function() {
					return "partials/_content-management.html";
				}
			})
			.when("/just-share", {
				controller:		"JustShareCtrl",
				templateUrl: function() {
					return "partials/_just-share.html";
				}
			})
			.when("/multiple-users", {
				controller:		"MultipleUsersCtrl",
				templateUrl: function() {
					return "partials/_multiple-users.html";
				}
			})
			.when("/our-relationships", {
				controller:		"OurRelationshipsCtrl",
				templateUrl: function() {
					return "partials/_our-relationships.html";
				}
			})
			.when("/portfolio", {
				controller:		"PortfolioCtrl",
				templateUrl: function() {
					return "partials/_portfolio.html";
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

	GalleryApp.controller('HomeCtrl', ["$scope", function($scope){
		$(".fullscreen-bg").fadeIn();
	}]);

	GalleryApp.controller('AtYourServiceCtrl', ["$scope", function($scope){
		$scope.color_class = "color-black";
		$(".fullscreen-bg").fadeOut();
		if (window.matchMedia("(min-width: 768px)").matches) {
		}
		if (window.matchMedia("(min-width: 768px)").matches) {
			$("body").css("background", "url('img/at_your_service_backgroup.png') no-repeat center center fixed");
			$("body").css("background-size", "cover");
		} else {
			$("body").css("background", "");
		}
	}]);

	GalleryApp.controller('BeTheDirectorCtrl', ["$scope", function($scope){
		$(".fullscreen-bg").fadeOut();
		if (window.matchMedia("(min-width: 768px)").matches) {
			$("body").css("background", "url('img/be_the_director_backgroup.png') no-repeat center center fixed");
			$("body").css("background-size", "cover");
		} else {
			$("body").css("background", "");
		}
	}]);

	GalleryApp.controller('ContentManagementCtrl', ["$scope", function($scope){
		$(".fullscreen-bg").fadeOut();
		if (window.matchMedia("(min-width: 768px)").matches) {
			$("body").css("background", "url('img/content_management_backgroup.png') no-repeat center center fixed");
			$("body").css("background-size", "cover");
		} else {
			$("body").css("background", "");
		}
	}]);

	GalleryApp.controller('JustShareCtrl', ["$scope", function($scope){
		$scope.color_class = "color-black";
		$(".fullscreen-bg").fadeOut("");
		if (window.matchMedia("(min-width: 768px)").matches) {
			$("body").css("background", "url('img/just_share_backgroup.png') no-repeat center center fixed");
			$("body").css("background-size", "cover");
		} else {
			$("body").css("background", "");
		}
	}]);

	GalleryApp.controller('MultipleUsersCtrl', ["$scope", function($scope){
		$scope.color_class = "color-black";
		$(".fullscreen-bg").fadeOut("");
		if (window.matchMedia("(min-width: 768px)").matches) {
			$("body").css("background", "url('img/multiple_users_backgroup.png') no-repeat center center fixed");
			$("body").css("background-size", "cover");
		} else {
			$("body").css("background", "");
		}
	}]);

	GalleryApp.controller('OurRelationshipsCtrl', ["$scope", function($scope){
		$scope.color_class = "color-black";
		$(".fullscreen-bg").fadeOut("");
		if (window.matchMedia("(min-width: 768px)").matches) {
			$("body").css("background", "url('img/our_relationships_backgroup.png') no-repeat center center fixed");
			$("body").css("background-size", "cover");
		} else {
			$("body").css("background", "");
		}
	}]);

	GalleryApp.controller('PortfolioCtrl', ["$scope", function($scope){
		$scope.color_class = "color-black";
		$(".fullscreen-bg").fadeOut();
		if (window.matchMedia("(min-width: 768px)").matches) {
			$("body").css("background", "url('img/portfolio_on_the_go_backgroup.png') no-repeat center center fixed");
			$("body").css("background-size", "cover");
		} else {
			$("body").css("background", "");
		}
	}]);

	GalleryApp.controller('SupportCtrl', ["$scope", function($scope){
		$(".fullscreen-bg").fadeOut();
		if (window.matchMedia("(min-width: 768px)").matches) {
			$("body").css("background", "url('img/support_backgroup.png') no-repeat center center fixed");
			$("body").css("background-size", "cover");
		} else {
			$("body").css("background", "");
		}
	}]);

})();