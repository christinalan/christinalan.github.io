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

function setup() {
  createCanvas(400, 400);
  amplitude = new p5.Amplitude();
}

let x = 30;
let y = 30;
let r = 50;
let level;
let volhistory = [];
function draw() {
  background("lightblue");

  level = amplitude.getLevel();
  //   console.log(level);
  volhistory.push(level);
  stroke(0);
  noFill();
  beginShape();
  for (let i = 0; i < volhistory.length; i++) {
    let y = map(volhistory[i], 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();

  if (volhistory.length > width) {
    volhistory.splice(0, 1);
  }

  let size = map(level, 0, 0.05, 0, 200);
  ellipse(width / 2, height / 2, size, size);
  //   circle(x, y, r);
}
