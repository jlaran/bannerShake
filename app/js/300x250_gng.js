//JS code goes here

var banner = new Banner({
	timelines: ["firstTimeline", "explotion"],
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

			timelinesArray[1].to("#aspas", .7, {ease: Bounce.easeOut, top: 90, left: 100})
								.to("#aspas", .7, {ease: Bounce.easeOut, left: 340}, "-=.2");
		}
	}
});

//import "sharedFunctions.js"