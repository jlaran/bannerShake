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
		},
		//Aqui se ponen los frames para luego ejecutarlos en el onComplete
		secondFrame : function(){
			timelinesArray[1].play();
		}
	},
	timelinesAnimation: {
		register: function(){

  		//Frame 1
		timelinesArray[0].addLabel("frame1")
						 .to("#footer", 0.3, {opacity:1})
						 .to("#GNG_logo", 0.5, {opacity:1, left:5, ease:Power2.easeOut})
 						 .to(".blueButton", 0.5, {opacity:1, left:171, ease:Power2.easeOut}, "-=0.5" )
  						 .to("#ff-cta", 0.2, {opacity:1}, "-=0.1" )
   						 .to("#hand", 1, {top:83, left:110, ease:Power2.easeOut}) 
  						 .to("#f1_txt1", 0.6, {opacity:1, onComplete:function(){ animationsObject.secondFrame();
  						 }});
  		//Frame 2
		timelinesArray[1].addLabel("frame2")
						 .to("#hand", 0.3, {opacity:0});
			}
	}
});

//import "sharedFunctions.js"