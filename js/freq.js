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

let hertz = 50;

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

// var t = document.getElementById("tone50");

// function playAudio() {
//   t.play();
// }

// function pauseAudio() {
//   t.pause();
// }

// $(window).on("scroll touchmove", function () {
//   if ($(document).scrollTop() >= $("#low").position().top) {
//     hertz = 50;
//     $("#hertz").html(hertz + " HZ");
//   }

//   if ($(document).scrollTop() >= $("#med").position().top) {
//     hertz = 150;
//     $("#hertz").html(hertz + " HZ");
//   }

//   if ($(document).scrollTop() >= $("#high").position().top) {
//     hertz = 500;
//     $("#hertz").html(hertz + " HZ");
//   }
// });

// $(document).ready(function () {
//   var scroll_pos = 0;
//   $(document).scroll(function () {
//     scroll_pos = $(this).scrollTop();
//     if (scroll_pos > 500) {
//       $("body").css("background-color", "black");
//     } else {
//       $("body").css("background-color", "darkblue");
//     }
//   });
// });
