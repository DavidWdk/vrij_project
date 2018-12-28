document.addEventListener('DOMContentLoaded', function() {



var lightUp = new TimelineMax();

  var lichten = document.querySelectorAll(".lichten")
  lightUp.to(lichten,  1, {delay: 1, ease: Power2.easeOut, opacity: 1})

  var buildingLinks1 = document.querySelectorAll("#bouw1_1_")
  lightUp.from(buildingLinks1,  3, {ease: Power4.easeOut, y: 800}, "-=0.8")

  var buildingLinks2 = document.querySelectorAll("#bouw2_1_")
  lightUp.from(buildingLinks2,  3, {ease: Power4.easeOut, y: 800}, "-=2.7")

  var buildingLinks3 = document.querySelectorAll("#bouw3_1_")
  lightUp.from(buildingLinks3,  3, {ease: Power4.easeOut, y: 800}, "-=2.5")

  var building1 = document.querySelectorAll("#bouw1")
  lightUp.from(building1,  3, {ease: Power4.easeOut, y: 800}, "-=2.75")

  var building2 = document.querySelectorAll("#bouw2")
  lightUp.from(building2,  3, {ease: Power4.easeOut, y: 800}, "-=2.7")

  var building3 = document.querySelectorAll("#bouw3")
  lightUp.from(building3,  3, {ease: Power4.easeOut, y: 800}, "-=2.5")

  var building4 = document.querySelectorAll("#bouw4")
  lightUp.from(building4,  3, {ease: Power4.easeOut, y: 800}, "-=2.75")

  var building5 = document.querySelectorAll("#bouw5")
  lightUp.from(building5,  3, {ease: Power4.easeOut, y: 800}, "-=2.7")

  var building6 = document.querySelectorAll("#bouw6")
  lightUp.from(building6,  3, {ease: Power4.easeOut, y: 800}, "-=2.5")

  var building10 = document.querySelectorAll("#gebouw")
  lightUp.from(building10,  3, {ease: Power4.easeOut, y: 800}, "-=2.8")

  var building7 = document.querySelectorAll("#bouw7")
  lightUp.from(building7,  3, {ease: Power4.easeOut, y: 800}, "-=2.75")

  var building8 = document.querySelectorAll("#bouw8")
  lightUp.from(building8,  3, {ease: Power4.easeOut, y: 800}, "-=2.7")

  var building9 = document.querySelectorAll("#bouw9")
  lightUp.from(building9,  3, {ease: Power4.easeOut, y: 800}, "-=2.7")

  var gradients = document.querySelectorAll("svg image")
  lightUp.to(gradients,  2, {ease: Power4.easeIn, opacity: 1}, "-=1")

  var appartement = document.querySelectorAll(".st2809")
  lightUp.to(appartement,  1, {ease: Power4.easeIn, fill: "rgb(24, 25, 44)"}, "-=1")

  var vliegtuigL = document.querySelector("#plane")
  lightUp.to(vliegtuigL,  0.5, {ease: Power0.easeNone, opacity: 0.1})

  var vliegtuig = document.querySelector("#plane")
  lightUp.to(vliegtuig,  35, {ease: Power0.easeNone, x: 2100},11)

  var vliegtuigKnipper = document.querySelectorAll(".planeLight")
  lightUp.to(vliegtuigKnipper,  0.5, {opacity: 0, repeat:-1, yoyo:true, repeatDelay: 1, ease:Linear.easeNone},11)

  // var vliegtuigL2 = document.querySelector("#planeLight2")
  // lightUp.to(vliegtuigL2,  0.5, {ease: Power0.easeNone, opacity: 0.3})


  // var vliegtuig = document.querySelector("#plane")
  // lightUp.to(vliegtuig,  1, {ease: Power0.easeNone, x: 150})

  //Totaal aantal Tweens: 21 (incl. alle commented tweens)

}, false);
