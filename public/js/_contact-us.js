(function() {
	$("#txt_name").keydown(function (e) {
		//console.log(e.keyCode);
		// 189 -
		// 81 Arroba
		if ( e.keyCode == 111 || e.keyCode == 109 || e.keyCode == 116 || e.keyCode == 55 || e.keyCode == 189 || e.keyCode == 81 || e.keyCode == 190 ){
			e.preventDefault();
			return false;
		}
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190, 32, 189]) !== -1 ||
			 // Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) ||
			 // Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
				 // let it happen, don't do anything
				 return;
		}
		// Ensure that it is a number and stop the keypress
		//if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		//if ( ( e.keyCode >= 65 && e.keyCode <= 90) || ( ( e.keyCode >= 95 && e.keyCode <= 122) ) ){
		if ( ( e.keyCode >= 65 && e.keyCode <= 90 ) ) {
			//e.preventDefault();
		}else{
			e.preventDefault();
			return false;
		}
	});

	$("#txt_email").keydown(function (e) {
		//console.log(e.keyCode);
		// 189 -
		// 81 Arroba
		if ( e.keyCode == 111 || e.keyCode == 109 || e.keyCode == 116 || e.keyCode == 55 || e.keyCode == 189 ){
			e.preventDefault();
			return false;
		}
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190, 32, 189, 48, 96]) !== -1 ||
			 // Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) ||
			 // Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
				 // let it happen, don't do anything
				 return;
		}
		// Ensure that it is a number and stop the keypress
		//if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		//if ( ( e.keyCode >= 65 && e.keyCode <= 90) || ( ( e.keyCode >= 95 && e.keyCode <= 122) ) ){
		if ( ( e.keyCode >= 65 && e.keyCode <= 90 ) || ( e.keyCode >= 97 && e.keyCode <= 105 ) || ( e.keyCode >= 48 && e.keyCode <= 57 ) ) {
			//e.preventDefault();
		}else{
			e.preventDefault();
			return false;
		}
	});

	$("#textarea_summary").keydown(function (e) {
		//console.log(e.keyCode);
		// 189 -
		// 81 Arroba
		if ( e.keyCode == 111 || e.keyCode == 109 || e.keyCode == 116 || e.keyCode == 55 || e.keyCode == 189 || e.keyCode == 81 || e.keyCode == 190 ){
			e.preventDefault();
			return false;
		}
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190, 32, 189]) !== -1 ||
			 // Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) ||
			 // Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
				 // let it happen, don't do anything
				 return;
		}
		// Ensure that it is a number and stop the keypress
		//if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		//if ( ( e.keyCode >= 65 && e.keyCode <= 90) || ( ( e.keyCode >= 95 && e.keyCode <= 122) ) ){
		if ( ( e.keyCode >= 65 && e.keyCode <= 90 ) || ( e.keyCode >= 48 && e.keyCode <= 57 ) ) {
			//e.preventDefault();
		}else{
			e.preventDefault();
			return false;
		}
	});

	$("#textarea_description").keydown(function (e) {
		//console.log(e.keyCode);
		// 189 -
		// 81 Arroba
		if ( e.keyCode == 111 || e.keyCode == 109 || e.keyCode == 116 || e.keyCode == 55 || e.keyCode == 189 || e.keyCode == 81 || e.keyCode == 190 ){
			e.preventDefault();
			return false;
		}
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190, 32, 189]) !== -1 ||
			 // Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) ||
			 // Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
				 // let it happen, don't do anything
				 return;
		}
		// Ensure that it is a number and stop the keypress
		//if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		//if ( ( e.keyCode >= 65 && e.keyCode <= 90) || ( ( e.keyCode >= 95 && e.keyCode <= 122) ) ){
		if ( ( e.keyCode >= 65 && e.keyCode <= 90 ) || ( e.keyCode >= 48 && e.keyCode <= 57 ) ) {
			//e.preventDefault();
		}else{
			e.preventDefault();
			return false;
		}
	});

	function isValidEmailAddress(emailAddress) {
    	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	    return pattern.test(emailAddress);
	};

	function _f_sendMessageToContact(importUrlContact){
		$.ajax({
			type: "GET",
			url: importUrlContact,
			success: function(datos, xhr){
				var ct =xhr.getResponseHeader("content-type") || "";
				if (ct.indexOf("html") > -1) {
					$(".message").html("Your message has been sent.");
				}
			}
		});
		fnClearForm();
	}

	function fnClearForm() {
		$("input").val("");
		$("textarea").val("");
		$("type-question").find("option:eq(0)").prop("selected", true);
	}

	$("#btn_send").click(function(){
		var nameForm = $("#txt_name").val();
		var emailForm = $("#txt_email").val();
		var typeMessageForm = $("#type-question option:selected").val();
		var summaryForm = $("#textarea_summary").val();
		var descriptionForm = $("#textarea_description").val();

		var completado = true;

		if ( nameForm == ""  ) {
			completado = false;
		};
		if ( emailForm == "" && !isValidEmailAddress(emailForm) ) {
			completado = false;
		};
		if ( summaryForm == ""  ) {
			completado = false;
		};
		if ( descriptionForm == ""  ) {
			completado = false;
		};

		if (completado==true){
			_f_sendMessageToContact("http://www.pivot4d.com/contents/sendInfoToContact.php?name="+nameForm+"&email="+emailForm+"&type="+typeMessageForm+"&summary="+summaryForm+"&description="+descriptionForm);
		}else{
			alert("Please complete all form fields.");
		}

	});
})();