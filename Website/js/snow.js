document.addEventListener('DOMContentLoaded', function() {

//om autoplay werkend te krijgen:
// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//   if(!isChrome){
//     $('#iframeAudio').remove()
//   }
// else{
//    $('#playAudio').remove() //zodat audio niet 2x afspeelt.
// }

//variabelen waardoor animaties worden genegeerd of juist afspelen op momenten waar dat nodig is.
var dialogOpen = false;
var showInfo = false;
var infoClicked = false;
var planeClicked = false;
var soundOn = false;

if (soundOn == false) {
  $(".soundBtn").attr('src',"../audio/soundOffSnow.png");
} else {
  $(".soundBtn").attr('src',"../audio/soundOnSnow.png");
}

//audio regeling
var wind = document.getElementById("playAudio");

//audio regeling
$(".soundBtn").click(function mute(){
if (soundOn == true) {
  $(".soundBtn").attr('src',"../audio/soundOnSnow.png");
  wind.muted = false;
  soundOn = false;
  console.log(soundOn);

} else {
  $(".soundBtn").attr('src',"../audio/soundOffSnow.png");
  wind.muted = true;
  soundOn = true;
  console.log(soundOn);
}});


TweenMax.to($(".welkom"),  1, {ease: Power4.easeIn, delay: 4, opacity: 0}, "-=1")

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
  TweenMax.to($("#snowDescription"),  1, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", y: -250})
  dialogOpen = false;
}});

//laat de info zien en vergroot de info knop om te laten zien dat het actief is.
$("#infoBtn").click(function showInfo(){
if (infoClicked == false) {
  TweenMax.to($("#infoBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1.4, scaleY:1.4})
  TweenMax.to($("#snowDescription"),  1, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", y: 0})
  infoClicked = true;
}
//als infoclick true is en de info button wordt aangeklikt schaalt de knop zich terug en de info wordt ingeklapt.
else{
  TweenMax.to($("#infoBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1, scaleY:1})
  TweenMax.to($("#snowDescription"),  1, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", y: -250})
infoClicked = false;
}});

//als de plane button wordt aangeklikt vergroot de button zich en wordt de gebruiker naar de startpagina gestuurt.
$("#planeBtn").click(function goToPlane(){
  planeClicked = true;
  TweenMax.to($("#planeBtn"),  0.8, {ease: Elastic.easeOut.config(1, 2), transformOrigin:"center", scaleX:1.4, scaleY:1.4})

  setTimeout("location.href = '../index.html';",500);
});
//tot de functie hierboven bestond dit bestand uitsluitend uit code die de knop linksboven regelt.

}, false);
