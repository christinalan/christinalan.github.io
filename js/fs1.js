//data is the first onload api
//data1 is data fetched from user's search query
//data2 is data from the first mp3 URL (underwater)
//data3 is data from user's search query MP3 URL fetch

let randomChoice; //picks first random file from on load search query
let soundText; //changes the name of sound on the page
let durationText; //changes the duration of sound on the page
let soundID; //first soundID fetched to do 2nd fetch to retrieve MP3 URL
let inputText; //retrieves user search term to generate new sound ID
let newSoundID; //this soundID finds user searched URL
let searchResult; //picks 2nd random file from user search query
let mp3URL; //stores the mp3URL
let mp3; //sound that is loaded into p5 sound library

//window load listener will fetch the pre-populated underwater search query API for the first soundID
window.addEventListener("load", function () {
  fetch(
    "https://freesound.org/apiv2/search/text/?query=underwater&token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL"
  )
    .then((response) => response.json())
    .then((data) => {
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
  //if user has searched for a term, run newSoundID
  if (searchClicked == true) {
    soundID = newSoundID;
    // console.log("new API can be fetched");

    fetch(
      "https://freesound.org/apiv2/sounds/" +
        newSoundID +
        "/?token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL"
    )
      .then((response) => response.json())
      .then((data3) => {
        durationText = document.getElementById("duration_text");
        durationText.innerHTML = data3.duration + " seconds";

        mp3URL = data3.previews["preview-hq-mp3"];

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
        //loads into p5
        mp3 = loadSound(mp3URL, soundSuccess, soundError, soundWaiting);
        // console.log(mp3);
      });
    //runs the first loaded mp3URL fetch (user has not searched for new term)
  } else if (searchClicked == false) {
    fetch(
      "https://freesound.org/apiv2/sounds/" +
        soundID +
        "/?token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL"
    )
      .then((response) => response.json())
      .then((data2) => {
        console.log(data2.duration + " seconds");

        durationText = document.getElementById("duration_text");
        durationText.innerHTML = data2.duration + " seconds";

        mp3URL = data2.previews["preview-hq-mp3"];

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
        //loads into p5
        mp3 = loadSound(mp3URL, soundSuccess, soundError, soundWaiting);
      });
  }
});

//Search button handles new text change and new mp3 soundID
let searchClicked = false;
let inputButton = document.getElementById("search_button");
inputButton.addEventListener("click", function () {
  inputText = document.getElementById("search_input").value;

  //this fetch will give the load button a new soundID
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
    })
    //if there is no result, this will display in the sound name text block
    .catch((error) => {
      soundText.innerHTML = "No results for that search term";
    });
  //boolean tells the load button to fetch the mp3 url based on the search term sound ID
  searchClicked = true;
});

//handles all audio play
let playButton = document.getElementById("button");
playButton.addEventListener("click", function () {
  userStartAudio();
  mp3.play();
});

//pauses audio
let pauseButton = document.getElementById("button1");
pauseButton.addEventListener("click", function () {
  mp3.pause();
});

//these booleans control the p5 sketch
let ampButton = false;
$("#amp_button").on("click", function () {
  ampButton = !ampButton;
});

let freqButton = false;
$("#freq_button").on("click", function () {
  freqButton = !freqButton;
});

let waveButton = false;
$("#wave_button").on("click", function () {
  waveButton = !waveButton;
});

let amplitude;
let fft;

function setup() {
  createCanvas(500, 500);
  getAudioContext().suspend();
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
    // console.log(ampButton);
    ampAnalyzer();
  }

  if (freqButton == true) {
    // console.log(freqButton);
    fqAnalyzer();
  }

  if (waveButton == true) {
    drawWave();
  }
}

function ampAnalyzer() {
  level = amplitude.getLevel();
  //   console.log(level);
  noFill();
  stroke(0);

  wave.push(level);
  push();
  beginShape();
  // push();

  translate(0, (2 * height) / 3 - map(level, 0, 1, height, 0));
  for (let i = 0; i < wave.length; i++) {
    vertex(i, map(wave[i], 0, 1, height, 0) + 0.5);
  }
  endShape();
  pop();

  //once the wave reaches width, it'll reset and show the most recent wave
  if (wave.length > width) {
    wave.splice(0, 1);
  }

  //this is the second visualizer on the AMP analyzer
  // blendMode(LIGHTEST);
  colorMode(RGB);
  let col = map(level, 0, 1, 0, 255);

  stroke(100, (col + random(1000)) % 255, 255);
  fill(col + (random(500) % 255), 0, 100, col + (random(500) % 255));
  //ellipse amplitude visualizer
  let size = map(level, 0, 0.5, 0, 200);
  ellipse(width / 2, height / 2, size, size);
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
  push();
  colorMode(HSL);
  noStroke();
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

let waveform;
function drawWave() {
  waveform = fft.waveform(); // numbers -1 to 1
  noStroke();
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length - 1, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);

    stroke(150, 100, i);
    vertex(x, y);

    fill(random(255), random(255), 255, 255);

    ellipse(x, y, 2, 2);
  }
  endShape();
}

let aboutLink = document.getElementById("about");
let aboutContent = document.getElementById("aboutPara");
let aboutClicked = false;
aboutLink.addEventListener("click", function () {
  console.log("link clicked");

  aboutClicked = !aboutClicked;
  console.log(aboutClicked);

  if (aboutClicked == true) {
    aboutContent.style.display = "block";
  } else {
    aboutContent.style.display = "none";
  }
});
