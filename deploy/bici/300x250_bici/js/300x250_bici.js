var banner=new Banner({timelines:["firstTimeline"],elementsToRegister:[{eventType:"click",element:"#identifier",functionToCall:"function"}],animations:{firstFrame:function(){}},timelinesAnimation:{register:function(){timelinesArray[0].to("identifier",.2,{opacity:1})}}}),customFunctions={config:{completed:!1},initData:function(){window.DeviceMotionEvent?window.addEventListener("devicemotion",customFunctions.deviceMotionHandler,!1):alert("Not supported.")},onRepeat:function(){timelinesArray[0].invalidate().restart()},deviceMotionHandler:function(a){var b=a.acceleration,c=b.z;c>8&&0==customFunctions.config.completed&&(timelinesArray[0].timeScale(9),customFunctions.config.completed=!0,setTimeout(function(){timelinesArray[1].play()},3e3))},changeAnimation:function(){timelinesArray[0].timeScale(9),customFunctions.config.completed=!0,setTimeout(function(){timelinesArray[1].play()},3e3)}};