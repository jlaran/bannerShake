//JS code goes here

var banner = new Banner({
	timelines: ["firstTimeline"],
	elementsToRegister: [
		{eventType: "click", element: "#banner", functionToCall: "changeAnimation"}
	],
	animations: {
		firstFrame : function(){
			customFunctions.initData();
			timelinesArray[0].play();
		}
	},
	timelinesAnimation: {
		register: function(){
			timelinesArray[0].to("#aspas", 0.4, {rotation:"+=90", ease: Power0.easeNone, onComplete: function(){
				customFunctions.onRepeat();
			}});
		}
	}
});

//import "sharedFunctions.js"