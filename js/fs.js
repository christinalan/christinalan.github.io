//loads html and fetch freesound underwater search query
let generator;
let mp3URL;
let soundID;
window.addEventListener("load", function () {
  // console.log("page is loaded");
  fetch(
    "https://freesound.org/apiv2/search/text/?query=underwater&token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL"
  )
    .then((response) => response.json())
    .then((data) => {
      //set global variable generator to random data pick
      generator = Math.floor(Math.random() * data.results.length);
      console.log(generator);

      //display random underwater sound
      $("#soundfile").html(data.results[generator].name);

      //swap sound with generator using swap button
      $("#refresh_button").click(function () {
        console.log("swap button clicked");

        generator = Math.floor(Math.random() * data.results.length);

        $("#soundfile").html(data.results[generator].name);
        console.log(generator);
      });

      //fetching new sound data to get actual mp3 url
      soundID = data.results[generator].id;
      // console.log(soundID);

      fetch(
        "https://freesound.org/apiv2/sounds/" +
          soundID +
          "/?token=LWGeaeOKwgA7MN4US8Vss8dwiNprOZnYiD78lTCL"
      )
        .then((response) => response.json())
        .then((data2) => {
          // console.log(data2.previews);

          mp3URL = data2.previews["preview-hq-mp3"];
          console.log(mp3URL);
          freesound = loadSound(mp3URL, soundSuccess, soundError, soundWaiting);

          //play sound with play button
          $("#button").click(function () {
            // console.log("play clicked");

            $("#mp3").attr("src", mp3URL);
            // console.log($("#mp3"));

            $("#mp3")[0].play();
          });

          //pause sound with pause button
          $("#button1").click(function () {
            // console.log("pause clicked");
            $("#mp3")[0].pause();
          });
        });
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
});

//enable p5 Sound
let context, contextOn;
function preload() {
  context = getAudioContext();
  contextOn = createButton("Audio is Enabled");
  // contextOn.position(500, 70);

  contextOn.mousePressed(() => {
    context.resume().then(() => {
      console.log("p5 audio enabled");
      contextOn.hide();
    });
  });
}

function setup() {
  createCanvas(400, 400);
}

function soundSuccess(resp) {
  console.log("Sound is ready!");
  console.log(resp);
  freesoundURL = freesound.file;
  stringFS = freesoundURL.toString();
  // console.log(freesound);
  // console.log(freesound.file);
  // console.log(freesoundURL);
  console.log(stringFS);
}
function soundError(err) {
  console.log("sound is not working");
  console.log(err);
}
function soundWaiting() {
  console.log("Waiting for sound...");
}

let freesound;
let freesoundURL;
let stringFS;
let p5sound;
let x = 30;
let y = 30;
let r = 50;

function p5SoundSuccess(p5resp) {
  console.log(p5resp);
  console.log("p5 file worked!");
}

function draw() {
  background("lightblue");
  circle(x, y, r);
}

function mousePressed() {
  if (mouseX > x - r / 2 && mouseX < x + r / 2) {
    if (mouseY > y - r / 2 && mouseY < y + r / 2) {
      p5sound = loadSound(stringFS, p5SoundSuccess);
      p5sound.play();
      console.log("play is clicked");
    }
  }
}
