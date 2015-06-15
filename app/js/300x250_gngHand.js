//JS code goes here

var banner = new Banner({
	timelines: ["firstTimeline","secondTimeline","thirdTimeline"],
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
		},
		thirdFrame : function(){
			timelinesArray[2].play();
		}
	},
	timelinesAnimation: {
		register: function(){

  		//Frame 1
		timelinesArray[0].addLabel("frame1")
						 .to("#footer", 0.3, {opacity:1})
						 .to("#GNG_logo", 0.5, {opacity:1, left:0, ease:Power2.easeOut})
 						 .to(".blueButton", 0.5, {opacity:1, left:171, ease:Power2.easeOut}, "-=0.5" )
  						 .to("#ff-cta", 0.2, {opacity:1}, "-=0.1" )
   						 .to("#hand", 1, {top:100, left:110, ease:Power2.easeOut}) 
  						 .to("#f1_txt1", 0.6, {opacity:1})
   						 .to("#f1_txt1", 0.6, {delay:2.6, opacity:0, onComplete:function(){ animationsObject.secondFrame();}});

  		//Frame 2
		timelinesArray[1].addLabel("frame2")
  						 .to("#f2_txt1", 0.6, {opacity:1, delay:1}, "-=0.3" )
   						 .to("#f2_txt1", 0.6, {delay:2.6, opacity:0, onComplete:function(){ animationsObject.thirdFrame();}});
  		//Frame 3
		timelinesArray[2].addLabel("frame3")
  						 .to("#f3_txt1", 0.6, {opacity:1}, "-=0.3" )
			}
	}
});

//import "sharedFunctions.js"