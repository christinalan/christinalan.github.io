//loads html
// window.addEventListener("load");

// //check for scrolling
window.addEventListener("scroll", function () {
  //how far a user has scrolled from the top of the page
  let currentY = window.scrollY + 50;
  let currentY2 = window.scrollY + 150;

  //the height of the document, not the window
  let totalHeight = document.body.scrollHeight;

  //calculate scroll percentage: divide, multiple by 100, round to nearest integer
  //   let currentS = Math.round(totalHeight / currentY) + "%";
  let currentH = Math.round((currentY2 / totalHeight) * 100) + "%";

  //   console.log(window.scrollY, currentH);

  document.body.style.background = "hsl(241,  100%, " + currentH + ")";
});

//scroll interaction
let hertz = 50;

//listens for scroll and sets the hertz value based on the value of window.scrollTop()
$(document).scroll(function () {
  var st = $(this).scrollTop();

  //   console.log(hertz, st);

  if (st > 0 && st < 350) {
    // hertz += 1;
    $("#hertz").html("50 HZ");
  } else if (st > 350 && st < 1000) {
    // hertz += 1;
    $("#hertz").html("150 HZ");
  } else if (st > 1000 && st < 1400) {
    // hertz += 1;
    $("#hertz").html("500 HZ");
  } else {
    hertz -= 1;
    // $("#hertz").html(hertz + " HZ");
  }
  hertz = st;
});

//determines which sound is played based on location of the scroll

$("#button").click(function () {
  console.log("button clicked");
  if ($(window).scrollTop() < 350) {
    $("audio#tone50")[0].play();
  } else if ($(window).scrollTop() > 350 && $(window).scrollTop() < 1000) {
    $("audio#tone150")[0].play();
  } else if ($(window).scrollTop() > 1000 && $(window).scrollTop() < 1400) {
    $("audio#tone500")[0].play();
  }
});

$("#button1").click(function () {
  console.log("button clicked");
  if ($(window).scrollTop() < 350) {
    $("audio#tone50")[0].pause();
  } else if ($(window).scrollTop() > 350 && $(window).scrollTop() < 1000) {
    $("audio#tone150")[0].pause();
  } else if ($(window).scrollTop() > 1000 && $(window).scrollTop() < 1400) {
    $("audio#tone500")[0].pause();
  }
});

//listen for click on the body of the document
// $(window).click(function () {
//   console.log("i clicked");
//   $("#text").append("<h2>This is the sound of </h2>");
// });
