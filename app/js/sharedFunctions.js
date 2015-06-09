//Shared Functions goes here

var customFunctions = {
	config: {
		completed: false
	},
	initData: function(){
		if (window.DeviceMotionEvent) {
		  window.addEventListener('devicemotion', customFunctions.deviceMotionHandler, false);
		} else {
		  alert("Not supported.");
		}
	},
	onRepeat: function() {
		timelinesArray[0].invalidate().restart();
	},
	deviceMotionHandler: function(eventData) {
		var acceleration = eventData.acceleration;
		var accelerationAxis = acceleration.z;

		if (accelerationAxis > 8 && customFunctions.config.completed == false){
			timelinesArray[0].timeScale(9);
			customFunctions.config.completed = true;

			setTimeout(function(){
				timelinesArray[1].play();
			}, 3000);
		}
	},
	changeAnimation: function(){
		timelinesArray[0].timeScale(9);
		customFunctions.config.completed = true;

		setTimeout(function(){
			timelinesArray[1].play();
		}, 3000);
	}
}