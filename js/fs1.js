//data is the first onload api
//data1 is data fetched from user's search query
//data2 is data from the first mp3 URL (underwater)
//data3 is data from user's search query MP3 URL fetch

let freeSoundData;
let randomChoice;
let soundText;
let soundID;
let inputText;
let newSoundID;
let searchResult;
let mp3URL;
let mp3;

window.addEventListener("load", function () {
  fetch(
    "https://freesound.org/apiv2/search/text/?query=underwater&token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL"
  )
    .then((response) => response.json())
    .then((data) => {
      freeSoundData = data.results;
      randomChoice = Math.floor(Math.random() * data.results.length);

      //display the first randomChoice underwater sound
      soundText = document.getElementById("soundfile");
      soundText.innerHTML = data.results[randomChoice].name;

      soundID = data.results[randomChoice].id;
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
});

//the load Button will handle the mp3URL fetch request
let loadButton = document.getElementById("refresh_button");
loadButton.addEventListener("click", function () {
  //this request handles first on load underwater soundID and loads first mp3
  fetch(
    "https://freesound.org/apiv2/sounds/" +
      soundID +
      "/?token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL"
  )
    .then((response) => response.json())
    .then((data2) => {
      mp3URL = data2.previews["preview-hq-mp3"];

      //This loads the mp3URL into the global mp3, which is used for the p5 sketch
      function soundSuccess(resp) {
        console.log("Sound is ready!");
        alert(soundText.innerHTML + " Sound is loaded!");
      }
      function soundError(err) {
        console.log("sound is not working");
        console.log(err);
      }
      function soundWaiting() {
        console.log("Waiting for sound...");
      }
      mp3 = loadSound(mp3URL, soundSuccess, soundError, soundWaiting);

      //this will load new sound if input search has been clicked
      if (searchClicked == true) {
        console.log("new API can be fetched");

        soundID = newSoundID;
        console.log(soundID);
        fetch(
          "https://freesound.org/apiv2/sounds/" +
            newSoundID +
            "/?token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL"
        )
          .then((response) => response.json())
          .then((data3) => {
            mp3URL = data3.previews["preview-hq-mp3"];
            console.log(mp3URL);
          });
      }
    });
  //To enable double clicks, just take the load and the if statement outside of the first fetch
});

//Search button handles new text change and new mp3
let searchClicked = false;
let inputButton = document.getElementById("search_button");
inputButton.addEventListener("click", function () {
  inputText = document.getElementById("search_input").value;
  //this fetch in this load button will be the search query
  let API_URL =
    "https://freesound.org/apiv2/search/text/?query=" +
    inputText +
    "&token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL";

  fetch(API_URL)
    .then((response) => response.json())
    .then((data1) => {
      searchResult = Math.floor(Math.random() * data1.results.length);

      soundText.innerHTML = data1.results[searchResult].name;

      newSoundID = data1.results[searchResult].id;
    });
  searchClicked = true;
});

let playButton = document.getElementById("button");
playButton.addEventListener("click", function () {
  mp3.play();
});

let pauseButton = document.getElementById("button1");
pauseButton.addEventListener("click", function () {
  mp3.pause();
});

let ampButton = false;
$("#amp_button").click(function () {
  ampButton = !ampButton;
});

let freqButton = false;
$("#freq_button").click(function () {
  freqButton = !freqButton;
});

let amplitude;
let fft;

function setup() {
  createCanvas(500, 500);
  amplitude = new p5.Amplitude();
  fft = new p5.FFT(0.8, 128);

  angleMode(DEGREES);
}

let wave = [];
let level;
let spectrum;
// let volhistory = [];

function draw() {
  background("lightblue");

  if (ampButton == true) {
    console.log(ampButton);
    ampAnalyzer();
  }

  // background("lightblue");
  if (freqButton == true) {
    console.log(freqButton);
    fqAnalyzer();
  }
}

function ampAnalyzer() {
  level = amplitude.getLevel();
  //   console.log(level);
  noFill();
  stroke(0);

  // volhistory.push(level);
  wave.push(level);
  //wavy amplitude visualizer adapted from "Sound Wave" by Aditi Jain http://www.openprocessing.org/sketch/609848
  push();
  beginShape();
  push();

  translate(0, (2 * height) / 3 - map(level, 0, 1, height, 0));
  for (let i = 0; i < wave.length; i++) {
    vertex(i, map(wave[i], 0, 1, height, 0) + 0.5);
  }
  endShape();
  pop();

  if (wave.length > width) {
    wave.splice(0, 1);
  }

  // blendMode(LIGHTEST);
  colorMode(RGB);
  let col = map(level, 0, 1, 0, 255);

  stroke(100, (col + random(1000)) % 255, 255);
  fill(col + (random(500) % 255), 0, 100, col + (random(500) % 255));
  //ellipse amplitude visualizer
  let size = map(level, 0, 0.5, 0, 200);
  ellipse(width / 2, height / 2, size, size);

  //original amp visualizer
  // stroke(0, 255, 0);
  // beginShape();
  // translate(0, (2 * height) / 3 - map(level, 0, 1, height, 0));
  // for (let i = 0; i < volhistory.length; i++) {
  //   let y = map(volhistory[i], 0, 1, height, 0);
  //   vertex(i, y);
  // }
  // endShape();

  // if (volhistory.length > width) {
  //   volhistory.splice(0, 1);
  // }
}

let amp;
function fqAnalyzer() {
  spectrum = fft.analyze();
  // console.log(spectrum);

  //easy spectrum analyzer
  // for (let i = 0; i < spectrum.length; i++) {
  //   amp = spectrum[i];
  //   let y = map(amp, 0, 255, 2 * height, 0);
  //   line(i, height, i, y);
  // }

  //circular spectrum analysis
  colorMode(HSL);
  noStroke();
  push();
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    amp = spectrum[i];
    let r = map(amp, 0, 128, 0, 200);
    let x = r * cos(angle);
    let y = r * sin(angle);
    // vertex(x, y);

    stroke(200, 255, i);
    line(0, 0, x, y);
  }
  endShape();
  pop();
}
