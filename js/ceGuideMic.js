window.addEventListener("load", function () {
  // console.log("page is loaded");
});

let micOn = false;
$("#buttonMic").click(function () {
  micOn = true;
});

$("#buttonMic1").click(function () {
  micOn = false;
});

let playMic = false;
$("#buttonMic2").click(function () {
  playMic = !playMic;
  console.log(playMic);
});

//global variables for mic and feedback
let mic, recorder, soundFile;
let state = 0;

function setup() {
  //p5 audio setup
  mic = new p5.AudioIn();
  //users have to manually enable the mic
  mic.start();
  // create a sound recorder
  recorder = new p5.SoundRecorder();
  // connect the mic to the recorder
  recorder.setInput(mic);
  // create an empty sound file that we will use to playback the recording
  soundFile = new p5.SoundFile();
}

function draw() {
  //draw mechanisms for mic input and recording audio
  if (micOn == true) {
    if (state === 0 && mic.enabled) {
      // Tell recorder to record to a p5.SoundFile which we will use for playback
      recorder.record(soundFile);
      fill("white");
      // text("Recording now!", 1300, 150);
      console.log("recording");
      state++;
    }
  } else if (micOn == false) {
    if (state === 1) {
      recorder.stop(); // stop recorder, and send the result to soundFile

      // background(0, 255, 0);
      // text("Recording stopped.", 1300, 150);
      console.log("stopped recording");
      state++;
    }
  }
  if (playMic == true) {
    console.log("playMic clicked");
    if (state === 2) {
      soundFile.play(); // play the result!
      console.log("playing sound");
      state = 0;
    }
  }
}
