document.addEventListener('DOMContentLoaded', function() {

  var appartement = document.querySelectorAll(".st2809")
  TweenMax.to(appartement,  2, {ease: Power4.easeIn, fill: "rgb(24, 25, 44)"});

  var gradients = document.querySelectorAll("svg image")
  TweenMax.to(gradients,  2, {ease: Power4.easeIn, opacity: 1});

  var buildings = document.querySelectorAll("bigBuilding")
  TweenMax.to(buildings, 2, {ease: Power4.easeIn, transform: translateY("1000px")});

  var bg = document.querySelector()
}, false);
