const countDownDate=new Date("2020-09-26T16:00:00Z").getTime(),timerFunction=setInterval(()=>{const currentDate=(new Date).getTime(),finalTime=countDownDate-currentDate;if(finalTime>0){const days=Math.floor(finalTime/864e5),hours=Math.floor(finalTime%864e5/36e5),minutes=Math.floor(finalTime%36e5/6e4),seconds=Math.floor(finalTime%6e4/1e3);document.getElementById("days").innerHTML=days,document.getElementById("hours").innerHTML=hours,document.getElementById("minutes").innerHTML=minutes,document.getElementById("seconds").innerHTML=seconds}else{clearInterval(timerFunction);let headword=document.querySelector("#headword"),hold=document.querySelector(".countdown-time");hold.innerHTML="",headword.innerHTML="TKS IS LIVE",hold.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/F6ZxYGIqTG8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}},1e3);