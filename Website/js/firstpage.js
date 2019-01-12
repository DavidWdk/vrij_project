document.addEventListener('DOMContentLoaded', function() {

//audio regeling
var soundOn = true;
var belts = new Audio('audio/belts.mp3');
var takeOff = new Audio('audio/takeoff.mp3');

$(".soundBtn").click(function volume(){
if (soundOn == true) {
  $(".soundBtn").attr('src',"audio/soundOff.png");
  belts.muted = true;
  takeOff.muted = true;
  soundOn = false;
  console.log(soundOn);
} else {
  $(".soundBtn").attr('src',"audio/soundOn.png");
  belts.muted = false;
  takeOff.muted = false;
  soundOn = true;
  console.log(soundOn);
}});



//Speelt de take off en seatbelts on sound effects bij onclick van de button, waarna het vliegtuig met een animatie wegvliegt.
//Daarna wordt de gebruiker geleidt naar de newyork.html file
$("#nycBtn").one("click",function takeOffNY(){
if (soundOn == true) {
  belts.play();
  TweenMax.to($("#fasten_belts"), 1, {ease: Power4.easeInOut, opacity: 1, repeat: 1, yoyo: true, repeatDelay: 1.5})
  TweenMax.to($("#carasorrie"),  6, {ease: Power3.easeIn, x: 1533.48, y: -619.58});
  TweenMax.to($("#Lijnen"), 2.5, {ease: Power4.easeIn, opacity: 1});
  takeOff.play();
  setTimeout("location.href = 'places/newyork.html';",6000);
}})

//Speelt de take off en seatbelts on sound effects bij onclick van de button, waarna het vliegtuig met een animatie wegvliegt.
//Daarna wordt de gebruiker geleidt naar de snow.html file
$("#snowbtn").one("click",function takeOffSnow(){
if (soundOn == true) {
  belts.play();
  TweenMax.to($("#fasten_belts"), 1, {ease: Power4.easeInOut, opacity: 1, repeat: 1, yoyo: true, repeatDelay: 1.5})
  TweenMax.to($("#carasorrie"),  6, {ease: Power3.easeIn, x: 1533.48, y: -619.58});
  TweenMax.to($("#Lijnen"), 2.5, {ease: Power4.easeIn, opacity: 1});
  takeOff.play();
  setTimeout("location.href = 'places/snow.html';",6000);
}})

//laat animaties zien die standaart bij belanden op de pagina afspelen, zoals het vliegtuig dat vliegt en de notificatie linksboven
TweenMax.to($(".topLeftInfo, .infoLogo"), 1, {ease: Power4.easeInOut, delay:6, opacity: 0})
TweenMax.to($("#wolken"),  40, {ease: Power0.easeNone,x: -1916.85, y: 774.475});
TweenMax.to($("#Lijnen"), 5, {ease: Power4.easeIn, opacity: 0});

}, false);
