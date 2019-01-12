document.addEventListener('DOMContentLoaded', function() {

//variabelen waardoor animaties worden genegeerd of juist afspelen op momenten waar dat nodig is.
var dialogOpen = false;
var showInfo = false;
var infoClicked = false;
var planeClicked = false;
var soundOn = true;
var aardbeving = document.getElementById("aardbeving");
// var audio = new Audio('../audio/traffic.m4a');
// audio.play();

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if(!isChrome){
    $('#iframeAudio').remove()
  }
else{
   $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background
}



//audio regeling
$(".soundBtn").click(function mute(){
if (soundOn == true) {
  $(".soundBtn").attr('src',"../audio/soundOnNY.png");
  aarbeving.muted = false;
  audio.muted = false;
  soundOn = false;
  console.log(soundOn);
} else {
  $(".soundBtn").attr('src',"../audio/soundOffNY.png");
  $("#aarbeving").muted = true;
  aarbeving.muted = true;
  audio.muted = true;
  soundOn = true;
  console.log(soundOn);
}});


//onderstaande code tot waar aangegeven allemaal voor de uitklap button rechts boven

//kleine verschuif animatie bij mouse enter
$("#btn").mouseenter(function btnHover(){
  if (dialogOpen == false) {

  TweenMax.to($("#btn"),  1, {ease: Elastic.easeOut.config(1.5, 0.4), x: -10})
}});

//verschuift terug bij mouse leave
$("#btn").mouseleave(function btnHoverFalse(){
  if (dialogOpen == false) {

  TweenMax.to($("#btn"),  0.3, {ease: Power4.easeInOut, x: 0})
}});

//vegroten van de info button bij mouse hover, behalve als infoclicked true is.
$("#infoBtn").mouseenter(function btnHover(){
if (infoClicked == false) {
  TweenMax.to($("#infoBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1.2, scaleY:1.2})
}
if (infoClicked == true) {
  TweenMax.to($("#infoBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1.4, scaleY:1.4})
}

});

//vegroten van de plane button bij mouse hover, behalve als deze is aangeklikt, dan blijft deze groot
$("#planeBtn").mouseenter(function btnHover(){
if (planeClicked == false) {
  TweenMax.to($("#planeBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1.2, scaleY:1.2})
}
else {
    TweenMax.to($("#planeBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1.4, scaleY:1.4})
  }
});

//terugschalen van de info button bij mouseleave, behalve als de info knop actief is
$("#infoBtn").mouseleave(function btnHover(){
if (infoClicked == false) {
  TweenMax.to($("#infoBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1, scaleY:1})
}
else {
  TweenMax.to($("#infoBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1.4, scaleY:1.4})
}});

//terugschalen van de info button bij mouseleave, behalve als deze is aangeklikt
$("#planeBtn").mouseleave(function btnHover(){
if (planeClicked == false) {
  TweenMax.to($("#planeBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1, scaleY:1})
}
else {
  TweenMax.to($("#planeBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1.4, scaleY:1.4})
}
});

//uitklappen van de plane en info button en het pijltje wordt omgedraait. dialogOpen wordt geactiveert.
$(".st2957, .st2958").click(function dialog(){
if (dialogOpen == false){
  TweenMax.to($("#infoBtn"),  1.3, {ease: Elastic.easeOut.config(1, 0.5), x: -100, y: -60})
  TweenMax.to($("#planeBtn"),  1.3, {ease: Elastic.easeOut.config(1, 0.5), x: -100, y: 60})
  TweenMax.to($("#wijzer"),  0.9, {ease: Elastic.easeOut.config(1, 0.5), transformOrigin:"center", rotation: "+=180", x: 5})
  dialogOpen = true;
}

//code zodra de button nog eens wordt geklikt en de buttons worden ingeklapt. Maakt ook zeker dat elke button
//weer terug wordt geschaalt naar normale grote en het info kader wordt terug gepositioneerd.
else {
  TweenMax.to($("#infoBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1, scaleY:1})
  TweenMax.to($("#planeBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1, scaleY:1})
  TweenMax.to($("#infoBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), x: 0, y: 0})
  TweenMax.to($("#planeBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), x: 0, y: 0})
  TweenMax.to($("#wijzer"),  0.9, {ease: Elastic.easeOut.config(1, 0.5), transformOrigin:"center", rotation: "+=180", x: 0})
  TweenMax.to($("#NYDescription"),  1, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", y: -230})
  dialogOpen = false;
}});

//laat de info zien en vergroot de info knop om te laten zien dat het actief is.
$("#infoBtn").click(function showInfo(){
if (infoClicked == false) {
  TweenMax.to($("#infoBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1.4, scaleY:1.4})
  TweenMax.to($("#NYDescription"),  1, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", y: 0})
  infoClicked = true;
}
//als infoclick true is en de info button wordt aangeklikt schaalt de knop zich terug en de info wordt ingeklapt.
else{
  TweenMax.to($("#infoBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1, scaleY:1})
  TweenMax.to($("#NYDescription"),  1, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", y: -230})
infoClicked = false;
}});

//als de plane button wordt aangeklikt vergroot de button zich en wordt de gebruiker naar de startpagina gestuurt.
$("#planeBtn").click(function goToPlane(){
  planeClicked = true;
  TweenMax.to($("#planeBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1.4, scaleY:1.4})

  setTimeout("location.href = '../index.html';",500);
});
//tot de functie hierboven bestond dit bestand uitsluitend uit code die de knop linksboven regelt.

//timeline die animaties afgaat zodra de gebruiker op de newyork.html belandt.
var lightUp = new TimelineMax();

  lightUp.to($("svg image"),  0, {ease: Power4.easeIn, opacity: 0}, "-=1")
  lightUp.to($("html"),  0, {ease: Power4.easeIn, backgroundColor: "#000"}, "-=1")
  lightUp.to($(".welkom"),  1, {ease: Power4.easeIn, delay: 4, opacity: 0}, "-=1")
  lightUp.to($(".lichten"),  1, {delay: 1, ease: Power2.easeOut, opacity: 1})
  lightUp.from($("#bouw1_1_"),  3, {ease: Power4.easeOut, y: 800}, "-=0.8")
  lightUp.from($("#bouw2_1_"),  3, {ease: Power4.easeOut, y: 800}, "-=2.7")
  lightUp.from($("#bouw3_1_"),  3, {ease: Power4.easeOut, y: 800}, "-=2.5")
  lightUp.from($("#bouw1"),  3, {ease: Power4.easeOut, y: 800}, "-=2.75")
  lightUp.from($("#bouw2"),  3, {ease: Power4.easeOut, y: 800}, "-=2.7")
  lightUp.from($("#bouw3"),  3, {ease: Power4.easeOut, y: 800}, "-=2.5")
  lightUp.from($("#bouw4"),  3, {ease: Power4.easeOut, y: 800}, "-=2.75")
  lightUp.from($("#bouw5"),  3, {ease: Power4.easeOut, y: 800}, "-=2.7")
  lightUp.from($("#bouw6"),  3, {ease: Power4.easeOut, y: 800}, "-=2.5")
  lightUp.from($("#gebouw"),  3, {ease: Power4.easeOut, y: 800}, "-=2.8")
  lightUp.from($("#bouw7"),  3, {ease: Power4.easeOut, y: 800}, "-=2.75")
  lightUp.from($("#bouw8"),  3, {ease: Power4.easeOut, y: 800}, "-=2.7")
  lightUp.from($("#bouw9"),  3, {ease: Power4.easeOut, y: 800}, "-=2.7")
  lightUp.to($("svg image"),  2, {ease: Power4.easeIn, opacity: 1}, "-=1")
  lightUp.to($(".st2809"),  1, {ease: Power4.easeIn, fill: "rgb(24, 25, 44)"}, "-=1")
  lightUp.to($("#plane"),  0.5, {ease: Power0.easeNone, opacity: 0.1})
  lightUp.to($("#plane"),  35, {ease: Power0.easeNone, x: 2100},11)
  lightUp.to($(".planeLight"),  0.5, {opacity: 0, repeat:-1, yoyo:true, ease:Linear.easeNone},11)
}, false);
