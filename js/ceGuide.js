//loads html
window.addEventListener("load", function () {
  // console.log("page is loaded");
});

// change lightness based on scroll value
window.addEventListener("scroll", function () {
  //how far a user has scrolled from the top of the page
  let currentY2 = window.scrollY + 150;

  //the height of the document, not the window
  let totalHeight = document.body.scrollHeight;

  //calculate scroll percentage: divide, multiple by 100, round to nearest integer
  let currentH = Math.round((currentY2 / totalHeight) * 100) + "%";

  document.body.style.background = "hsl(116,  0%, " + currentH + ")";
});

//set play to true to trigger the canvas
let roomAudioOn = false;
let roomaudio = $("audio#room");

//play room audio button
$("#buttonRoom").click(function () {
  roomaudio[0].play();
  roomAudioOn = true;
  // console.log(roomAudioOn);
});

//pause room audio button
$("#buttonRoom1").click(function () {
  roomaudio[0].pause();
});

//set play to true to trigger light animation
let lightAudioOn = false;
let lightaudio = $("audio#light");
// play light audio button
$("#buttonLight").click(function () {
  lightaudio[0].play();
  lightAudioOn = true;
});

$("#buttonLight1").click(function () {
  lightaudio[0].pause();
});

//set play to true to trigger fog animation
let fogAudioOn = false;
let fogaudio = $("audio#fog");
// play light audio button
$("#buttonFog").click(function () {
  fogaudio[0].play();
  fogAudioOn = true;
});

$("#buttonFog1").click(function () {
  fogaudio[0].pause();
});

function setup() {
  createCanvas(500, 500);
}

function draw() {
  if (roomAudioOn == true) {
    background("black");
  }
}
