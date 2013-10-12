$(function(){
	$(".settingForm").submit(function(event){
		var begin = parseInt($("#machineNumber_begin").val());
		var end = parseInt($("#machineNumber_end").val());
		if (isNaN(begin) || isNaN(end) || (begin > end)) {
			if ($(".error").length > 0) {
				$(".error").show();
			} else {
				$("body").append("<span class='error' style='color: red;'>what do you want?</span>");
			}
		} else {
			$(".error").hide();
			login_users(begin, end);
		}
		return false;
	});

	function login_users(begin, end) {
		$(".notifer").html("readying..")
		chrome.runtime.sendMessage({
			open_tab: true,
			begin: begin,
			end: end
		})
	};
});