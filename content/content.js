$(function(){
	var time;

	function inspect_script() {
		var $el = $("#room-中华网军事战略群").parents("div[ng-switch-when=2]");
		if ($el.length > 0) {
			$el.css("display", "block");
// 			var scripts = "<script>\
// var index = 1;\
// function sendMessage() {\
//     var room_name = \"中华网军事战略群\";\
//     var message = \"这是我发送的第 [\" + index + \"] 条信息\";\
//     index ++;\
//     $(\"#room-\" + room_name).val(message);\
//     setTimeout(function(){\
//         $(\"#room-\" + room_name).trigger(\"input\");\
//         $(\"button[type=submit]\").click();\
//     }, 0);\
// };\
// var time = setInterval(sendMessage, 1000)\
// </script>"
// 			$("body").append(scripts);
		} else {
			time = setTimeout(inspect_script, 2000)
		}
	}

	inspect_script();
})