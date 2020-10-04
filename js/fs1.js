let freeSoundData;
let randomChoice;
let soundText;
let soundID;
let mp3URL;
let mp3;

window.addEventListener("load", function () {
  fetch(
    "https://freesound.org/apiv2/search/text/?query=underwater&token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL"
  )
    .then((response) => response.json())
    .then((data) => {
      freeSoundData = data.results.length;
      randomChoice = Math.floor(Math.random() * freeSoundData);

      //display the first randomChoice underwater sound
      soundText = document.getElementById("soundfile");
      soundText.innerHTML = data.results[randomChoice].name;

      soundID = data.results[randomChoice].id;
      //   console.log(soundID);
    });
});

//the load Button will handle the mp3URL fetch request
let loadButton = document.getElementById("refresh_button");
loadButton.addEventListener("click", function () {
  fetch(
    "https://freesound.org/apiv2/sounds/" +
      soundID +
      "/?token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL"
  )
    .then((response) => response.json())
    .then((data2) => {
      mp3URL = data2.previews["preview-hq-mp3"];
    });
  function soundSuccess(resp) {
    console.log("Sound is ready!");
    // console.log(resp);
  }
  function soundError(err) {
    console.log("sound is not working");
    console.log(err);
  }
  function soundWaiting() {
    console.log("Waiting for sound...");
  }
  mp3 = loadSound(mp3URL, soundSuccess, soundError, soundWaiting);
});

let playButton = document.getElementById("button");
playButton.addEventListener("click", function () {
  mp3.play();
});

let pauseButton = document.getElementById("button1");
pauseButton.addEventListener("click", function () {
  mp3.pause();
});

function setup() {
  createCanvas(400, 400);
}

let x = 30;
let y = 30;
let r = 50;
function draw() {
  background("lightblue");
  circle(x, y, r);
}
