//JS code goes here

var banner = new Banner({
	timelinesName: ["firstTimeline","secondTimeline","thirdTimeline", "fourthTimeline"],
	elementsToRegister: [
		//{eventType: "click", element: "#banner", functionToCall: "changeAnimation"}
	],
	animationFrames: [
		function firstFrame(){
			//customFunctions.initData();
			banner.timelinesArray[0].play();
		},
		//Aqui se ponen los frames para luego ejecutarlos en el onComplete
		function secondFrame(){
			banner.timelinesArray[1].play();
		},
		function thirdFrame(){
			banner.timelinesArray[2].play();
		},
		function fourthFrame(){
			banner.timelinesArray[3].play();
		}
	],
	timelinesToRegister:{
  		register: function(){
  			//Frame 1
		banner.timelinesArray[0].addLabel("frame1")
						 .to("#footer", 0.3, {opacity:1})
						 .to("#GNG_logo", 0.5, {opacity:1, left:0, ease:Power2.easeOut})
 						 .to(".blueButton", 0.5, {opacity:1, left:171, ease:Power2.easeOut}, "-=0.5" )
  						 .to("#ff-cta", 0.2, {opacity:1}, "-=0.1" )
  						 .to("#f1_txt1", 0.8, {opacity:1, top:30, ease:Power2.easeOut}, "-=0.2" )
   						 .to("#f1_txt2", 0.8, {opacity:1, top:50, ease:Power2.easeOut}, "-=0.8" )
						 .to("#hand", 0.6, {top:100, left:110, ease:Power2.easeOut}, "-=0.2" ) 
   						 .to("#f1_txt1", 0.4, {delay:2.6, opacity:0})
						 .to("#f1_txt2", 0.4, {opacity:0, onComplete:function(){banner.animationFrames[1]()}}, "-=0.4" );

  		//Frame 2
		banner.timelinesArray[1].addLabel("frame2")
  						 .to("#f2_txt1", 0.8, {opacity:1, top:30, delay:1}, "-=1" )
  						 .to("#f2_txt2", 0.8, {opacity:1, top:50,}, "-=1" )
   						 .to("#f2_txt1", 0.6, {delay:2.6, opacity:0})
   						 .to("#f2_txt2", 0.6, {opacity:0}, "-=0.6" )			 
						 .to("#hand", 0.6, {opacity:0, top:200, left:200, ease:Power2.easeOut, onComplete:function(){banner.animationFrames[2]()}}, "-=0.6" ); 

  		//Frame 3
		banner.timelinesArray[2].addLabel("frame3")
  						 .to("#f3_txt1", 0.6, {opacity:1}, "-=2" )
						 .to(".marco2", 0.6, {opacity:1}, "-=1.5" )
   						 .to("#hand2", 0.3, {opacity:1})
   						 .to(["#hand2",".marco2","#f3_txt1"], 0.3, {delay:1, opacity:0, onComplete:function(){banner.animationFrames[3]()}});

  		//Frame 4
		banner.timelinesArray[3].addLabel("frame4")
  						 .to("#f4_txt1", 0.6, {opacity:1, top:90}, "-=2" )
  						 .to("#f4_txt2", 0.6, {opacity:1, top:118}, "-=2" )
  		}
	}
});

//import "sharedFunctions.js"