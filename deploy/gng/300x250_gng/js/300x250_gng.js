var banner=new Banner({timelines:["firstTimeline","explotion"],elementsToRegister:[{eventType:"click",element:"#banner",functionToCall:"changeAnimation"}],animations:{firstFrame:function(){customFunctions.initData(),timelinesArray[0].play()}},timelinesAnimation:{register:function(){timelinesArray[0].to("#aspas",.4,{rotation:"+=90",ease:Power0.easeNone,onComplete:function(){customFunctions.onRepeat()}}),timelinesArray[1].to("#aspas",.7,{ease:Bounce.easeOut,top:90,left:100}).to("#aspas",.7,{ease:Bounce.easeOut,left:340},"-=.2")}}}),customFunctions={config:{completed:!1},initData:function(){window.DeviceMotionEvent?window.addEventListener("devicemotion",customFunctions.deviceMotionHandler,!1):alert("Not supported.")},onRepeat:function(){timelinesArray[0].invalidate().restart()},deviceMotionHandler:function(a){var b=a.acceleration,c=b.z;c>8&&0==customFunctions.config.completed&&(timelinesArray[0].timeScale(9),customFunctions.config.completed=!0,setTimeout(function(){timelinesArray[1].play()},3e3))},changeAnimation:function(){timelinesArray[0].timeScale(9),customFunctions.config.completed=!0,setTimeout(function(){timelinesArray[1].play()},3e3)}};