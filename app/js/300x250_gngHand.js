//JS code goes here

var banner = new Banner({
	timelines: ["firstTimeline","secondTimeline"],
	elementsToRegister: [
		//{eventType: "click", element: "#banner", functionToCall: "changeAnimation"}
	],
	animations: {
		firstFrame : function(){
			//customFunctions.initData();
			timelinesArray[0].play();
		}

	},
	timelinesAnimation: {
		register: function(){
		timelinesArray[0].to("#footer", 0.3, {opacity:1})
						 .to("#GNG_logo", 0.5, {opacity:1, left:5, ease:Power2.easeOut})
 						 .to(".blueButton", 0.5, {opacity:1, left:171, ease:Power2.easeOut}, "-=0.5" )
  						 .to("#ff-cta", 0.2, {opacity:1}, "-=0.1" )
   						 .to("#hand", 1, {top:83, left:110, ease:Power2.easeOut}) 
  						 .to("#f1_txt1", 0.6, {opacity:1, onComplete:[1]});

		timelinesArray[1].to("#hand", 0.2, {left:120, scaleY:0.5, ease:Power4.easeInOut})				 
			}
	}
});

//import "sharedFunctions.js"