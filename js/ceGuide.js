//loads html
window.addEventListener("load", function () {
  // console.log("page is loaded");
  // fetch(
  //   "https://api.mixcloud.com/CrackMagazine/live-from-refraction-festival-amazondotcom/embed-json/"
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   });
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
});

//pause room audio button
$("#buttonRoom1").click(function () {
  roomaudio[0].pause();
  roomAudioOn = false;
});

//set play to true to trigger light animation
let lightAudioOn = false;
let lightaudio = $("audio#light");

// play light audio button
$("#buttonLight").click(function () {
  // lightaudio[0].play();
  sound.play();
  lightAudioOn = true;
});

$("#buttonLight1").click(function () {
  // lightaudio[0].pause();
  sound.pause();
  lightAudioOn = false;
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
  fogAudioOn = false;
});

//blob audio functions
let blobAudioOn = false;
$("#buttonBlob").click(function () {
  blobAudioOn = true;
})

$("#buttonBlob1").click(function () {
  blobAudioOn = false;
})

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

//global variables for fog
let tileCount = 150;
let noiseScale = 0.01;
let grid;
let xnoise;
let ynoise;
let t = 0;

//global variables for main strobe light
let t1 = 0;
let now = Date.now();

//global variables for p5 Lightroom audio
let sound, amplitude, size, level;

//global variables for mic and feedback
let mic, recorder, soundFile;
let state = 0;

function preload() {
  sound = loadSound("Audio/lightM.mp3");
}

//stuff for blobs
let dancers = [];

function setup() {
  createCanvas(windowWidth * 2, windowHeight * 2);
  // pixelDensity(1);
  frameRate(30);
  z_off = 0;

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

  amplitude = new p5.Amplitude();
  amplitude.setInput(sound);

  // slider("radius", 10, width * 2, 750);
  slider("points", 1, 1000, 500);
  slider("radiusNoise", 0.0001, 3, 1.0733, 0.0001);
  slider("alphaNoise", 0.0001, 3, 1.0733, 0.0001);
  // slider("rate", 0.001, 0.05, 0.015, 0.0001);

  //metablobs
  for (i = 0; i < 5; i++) {
    dancers.push(new Dancer(random(0, width), random(0, height)))
  };

}

function draw() {
  if (roomAudioOn == true) {
    background(0);
  } else if (roomAudioOn == false) {
  }

  //from sketch https://editor.p5js.org/techty/sketches/HUs2dx-vF
  if (fogAudioOn == true) {
    createGrid();
    showGrid();
    t += 0.005;
  }

  //from sketch https://www.openprocessing.org/sketch/815719
  if (lightAudioOn == true) {
    p5light();

    updateVars();
    //tsize adjusts the rate of the light beam
    tsize = map(level, 0.001, 0.4, 0, 0.7);
    t1 += tsize;
    // console.log(t1);
    // t1 += vars.rate.value;

    //main light animation without the sliders
    let spacing = PI / 2 / vars.points.value;
    for (let i = 0; i < vars.points.value; i++) {
      let theta = i * spacing;
      let nuzz = noise(theta + t1);
      let radius = windowWidth * 2;
      // let radius = vars.radius.value; // + nuzz
      let x = radius * cos(theta + (nuzz - 0.5) * vars.radiusNoise.value);
      let y = radius * sin(theta + (nuzz - 0.5) * vars.radiusNoise.value);
      stroke(255, 255 * (nuzz - 0.3) * vars.alphaNoise.value);
      line(0, 0, x, y);
    }
  } else if (lightAudioOn == false) {
  }

  //p5 audio analyzer or light audio
  level = amplitude.getLevel();
  // console.log(level);
  size = map(level, 0.08, 0.3, 0, 255);

  //draw mechanisms for mic input and recording audio
  if (micOn == true) {
    if (state === 0 && mic.enabled) {
      // Tell recorder to record to a p5.SoundFile which we will use for playback
      recorder.record(soundFile);
      // fill("white");
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
      fill("white");
      alert("Play to hear recording.\nClick again to re-record.", 830, 240);
      // text(
      //   "Play to hear recording.\nClick again to re-record.",
      //   830,
      //   240
      // );
      console.log("playing sound");
      state = 0;
    }
    // } else if (playMic == false) {
    // }
  }

  //blob Draw functions
  if (blobAudioOn == true) {
    console.log("blob go!")

    loadPixels();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let sum = 0;
      for (i = 0; i < dancers.length; i++) {
        let xdif = x - dancers[i].x;
        let ydif = y - dancers[i].y;
        let d = sqrt((xdif * xdif) + (ydif * ydif));
        sum += 10 * dancers[i].r / d;
      }
      set(x, y, color(sum));
    }
  }
  updatePixels();

  for (i = 0; i < dancers.length; i++) {
    dancers[i].update();
  }
  }
}

//end of draw
// functions to make fog
function createGrid() {
  grid = [];
  let tileSize = width / tileCount;
  ynoise = t;
  for (let row = 0; row < tileCount; row++) {
    grid[row] = [];
    xnoise = t;
    for (let col = 0; col < tileCount; col++) {
      let x = col * tileSize;
      let y = row * tileSize;
      let a = noise(xnoise, ynoise) * 150;
      grid[row][col] = new Tile(x, y, tileSize, a);
      xnoise += noiseScale;
    }
    ynoise += noiseScale;
  }
}
function showGrid() {
  for (let row = 0; row < tileCount; row++) {
    for (let col = 0; col < tileCount; col++) {
      grid[row][col].show();
    }
  }
}
class Tile {
  constructor(x, y, size, a) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.c = color(200, a);
  }

  show() {
    noStroke();
    fill(this.c);
    rect(this.x, this.y, this.size, this.size);
  }
}

//functions to make light
// Slider helpers
let vars = {};
function slider(name, min, max, val, step = 1) {
  vars[name] = {
    nameSpan: createSpan(name).style("color", "darkgrey"),
    slider: createSlider(min, max, val, step),
    valueSpan: createSpan(val).style("color", "darkgrey"),
    value: val,
  };

  createDiv().class("slider");
}

function updateVars() {
  let values = {};
  Object.keys(vars).forEach((name) => {
    let newVal = vars[name].slider.value();
    vars[name].value = newVal;
    vars[name].valueSpan.html(newVal);

    values[name] = vars[name].value;
  });
  return values;
}

let colorS;
function p5light() {
  colorS = {
    r: random(0, 50),
    g: random(50, 100),
    b: random(200, 255),

    one: color("#DC143C"),
    two: color("#0000FF"),
  };

  // fill(colorS.r, colorS.g, colorS.b);
  // ellipse(width / 2, height / 2, size);
  if (random(1) > 0.5) {
    background(colorS.r, 0, colorS.b, size);
  } else {
    background(0, colorS.g, colorS.b, size);
  }
}

class Dancer {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    let angle = random(0, 2 * PI);
    this.xspeed = random(0, 3) * Math.cos(angle);
    this.yspeed = random(0, 3) * Math.sin(angle);
    this.r = random(0, 100);
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width || this.x < 0) this.xspeed *= -1;
    if (this.y > height || this.y < 0) this.yspeed *= -1;
  }

  show() {
    noFill();
    // stroke(0);
    // strokeWeight(2);
    ellipse(this.x, this.y, this.r * 5, this.r * 3);
  }
}