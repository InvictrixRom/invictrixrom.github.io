document.addEventListener("DOMContentLoaded", function() {
	setInterval(function() {
		var screenshots = ["6p", "mi5", "redminote3"];
		if (typeof arguments.callee.current_screenshot == "undefined") {
			arguments.callee.current_screenshot = 0;
		} else {
			arguments.callee.current_screenshot++;
			if (arguments.callee.current_screenshot == screenshots.length)
				arguments.callee.current_screenshot=0;
		}
		document.getElementById("device_frame").src="images/devices/" + screenshots[arguments.callee.current_screenshot] + ".jpg";
	}, 3000);
}, false);
