//JS code goes here

var banner = new Banner({
	timelines: ["firstTimeline"],
	elementsToRegister: [
		{eventType: "click", element: "#identifier", functionToCall: "function"}
	],
	animations: {
		firstFrame : function(){
		}
	},
	timelinesAnimation: {
		register: function(){
			timelinesArray[0].to("identifier", 0.2, {opacity:1});
		}
	}
});

//import "sharedFunctions.js"