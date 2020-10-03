//loads html
window.addEventListener("load", function () {
  console.log("page is loaded");
});

// change lightness based on scroll value
window.addEventListener("scroll", function () {
  //how far a user has scrolled from the top of the page
  // let currentY = window.scrollY + 50;
  let currentY2 = window.scrollY + 150;

  //the height of the document, not the window
  let totalHeight = document.body.scrollHeight;

  //calculate scroll percentage: divide, multiple by 100, round to nearest integer
  //   let currentS = Math.round(totalHeight / currentY) + "%";
  let currentH = Math.round((currentY2 / totalHeight) * 100) + "%";

  //   console.log(window.scrollY, currentH);

  document.body.style.background = "hsl(241,  100%, " + currentH + ")";
});

//play audio
var roomaudio = $("audio#room")[0];
console.log(roomaudio);

roomaudio.prop("volume", 0.0);

$("#buttonRoom").click(function () {
  roomaudio.animate({ volume: 1.0 }, 1500);
});
//pause button
$("#buttonRoom1").click(function () {
  roomaudio.animate({ volume: 0.1 }, 1500);
});
