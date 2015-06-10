//JS code goes here

var banner = new Banner({
	timelines: ["firstTimeline"],
	elementsToRegister: [
		//{eventType: "click", element: "#banner", functionToCall: "changeAnimation"}
	],
	animations: {
		firstFrame : function(){
			//customFunctions.initData();
			//timelinesArray[0].play();
		}
	},
	timelinesAnimation: {
		register: function(){
			
		}
	}
});

//import "sharedFunctions.js"