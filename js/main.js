(function() {
	$(document).on("ready", function(e) {
		fnLoadGaleryContent("home");
	});
	$(".nav.navbar-nav a").on("click", function(e) {
		fnLoadGaleryContent($(this).data("content"));
	});
	function fnLoadGaleryContent(sOption) {
		$.ajax({
			dataType: "html",
			success: function(data) {
				$(".galery").html(data);
			},
			type: "get",
			url: "./_" + sOption + ".html"
		});
	}
})();