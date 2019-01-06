document.addEventListener('DOMContentLoaded', function() {

$("#nycBtn").click(function takeOff(){
  var carasorrie = document.querySelector("#carasorrie")
  TweenMax.to(carasorrie,  6, {ease: Power3.easeIn, x: 1533.48, y: -619.58});
  var lijnen = document.querySelector("#Lijnen")
  TweenMax.to(lijnen, 2.5, {ease: Power4.easeIn, opacity: 1});
  var audio = new Audio('audio/takeoff.mp3');
  audio.play();
  setTimeout("location.href = 'places/newyork.html';",6000);
})

$("#snowbtn").click(function takeOff(){
  var carasorrie = document.querySelector("#carasorrie")
  TweenMax.to(carasorrie,  6, {ease: Power3.easeIn, x: 1533.48, y: -619.58});
  var lijnen = document.querySelector("#Lijnen")
  TweenMax.to(lijnen, 2.5, {ease: Power4.easeIn, opacity: 1});
  var audio = new Audio('audio/takeoff.mp3');
  audio.play();
  setTimeout("location.href = 'places/snow.html';",6000);
})

var info = document.querySelectorAll(".topLeftInfo, .infoLogo")
TweenMax.to(info, 1, {ease: Power4.easeInOut, delay:6, opacity: 0})

var wolken = document.querySelector("#wolken")
TweenMax.to(wolken,  40, {ease: Power0.easeNone,x: -1916.85, y: 774.475});

var lijnen = document.querySelector("#Lijnen")
TweenMax.to(lijnen, 5, {ease: Power4.easeIn, opacity: 0});

}, false);
