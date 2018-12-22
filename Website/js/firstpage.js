document.addEventListener('DOMContentLoaded', function() {

var wolken = document.querySelector("#wolken")
TweenMax.to(wolken,  40, {ease: Power0.easeNone,x: -1916.85, y: 774.475});

var lijnen = document.querySelector("#Lijnen")
TweenMax.to(lijnen, 5, {ease: Power4.easeIn, opacity: 0});

}, false);
