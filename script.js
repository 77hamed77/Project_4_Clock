var hours = document.querySelector(".hour")
var minutes = document.querySelector(".minute")
var secounds = document.querySelector(".secound")
var hoursClock = document.querySelector(".hour1")
var minutesClock = document.querySelector(".minute1")
var secoundsClock = document.querySelector(".secound1")
var pm = document.querySelector(".pm")
var am = document.querySelector(".am")
var moon = document.querySelector(".moon")
var sun = document.querySelector(".sun")
var secound = 0
var minute = 0
var hour = 0
var reset = document.querySelector(".reset")
var stop = document.querySelector(".stop")
var contnue = document.querySelector(".contnue")

secounds.innerHTML=`0${secound}`
minutes.innerHTML=`0${minute}`
hours.innerHTML=`0${hour}`
var q= setInterval(clock,1000)    
 function clock() {
   secound+=q
   secounds.innerHTML=secound
   if (secound == 59) {
       secound=0
       minute++
       minutes.innerHTML=minute
   }
   if (minute==59) {
       minute=0
       hour++
       hours.textContent=hour
   }
}
clock()
reset.onclick = function resetOn() {
    secound = 0
    minute = 0
    hour = 0
    secounds.innerHTML=secound
    minutes.innerHTML=minute
    hours.innerHTML=hour
    contnue.disabled = false
}
stop.onclick = function stopOff() {
    clearInterval(q)
    clearInterval(r)
    contnue.disabled = false
}
var r
contnue.onclick = function contnueOn(){
    clock()
   r = setInterval(clock,1000)
   contnue.disabled = true
}


function clockTime() {
    setInterval(clockTime,1000)
    var time = new Date()
    secoundsClock.innerHTML = time.getSeconds()
    minutesClock.innerHTML = time.getMinutes()
    hoursClock.innerHTML = time.getHours()
    if (time.getHours() > 12 ) {
        pm.style.display="block"
        am.style.display="none"
        sun.style.fontSize="1.5rem"
    }else{
        pm.style.display="none"
        am.style.display="block"
        moon.style.fontSize="1.5rem"
    }
}
clockTime()