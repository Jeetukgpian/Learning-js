const time=document.querySelector('.time')


//set interval method to make time repition in millisecs after 1000ms=1sec
setInterval(function (){
    let date=new Date()
    console.log(date.toLocaleTimeString())
    time.innerHTML= date.toLocaleTimeString()
},1000);