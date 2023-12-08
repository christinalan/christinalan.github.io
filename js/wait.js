//links to open modals
let about = document.getElementById("about");
let instructions = document.getElementById("instructions");

//actual modal boxes
let aboutModal = document.getElementById("about-modal");
let instModal = document.getElementById("instructions-modal");

// let span = document.getElementsByClassName("close")[0];
//span that closes about window
let aboutSpan = document.getElementById("about-span");
//span that moves to the next instructions window
let nextSpan = document.getElementById("next-span");
//span that moves back to the about window
let backSpan = document.getElementById("back-span");

let instSpan = document.getElementById("inst-span");

window.addEventListener("load", () => {
  // aboutContent.innerHTML
  //about window from clicking about link
  about.onclick = function () {
    aboutModal.style.display = "block";
  };

  //instructions window from clicking instructions link
  instructions.onclick = function () {
    instModal.style.display = "block";
  };

  nextSpan.onclick = function () {
    instModal.style.display = "block";
    aboutModal.style.display = "none";
  };

  backSpan.onclick = function () {
    instModal.style.display = "none";
    aboutModal.style.display = "block";
  };

  //clicking on closing x's for both modals
  instSpan.onclick = function () {
    instModal.style.display = "none";
  };

  aboutSpan.onclick = function () {
    aboutModal.style.display = "none";
  };

  // window.onclick = function (event) {
  //   if (event.target !== aboutModal) {
  //     aboutModal.style.display = "none";
  //   }
  //   if (event.target !== instModal) {
  //     instModal.style.display = "none";
  //   }
  // };
});

let freqText = document.getElementById("freq");
let spectrum, osc;
let cnv;
let clicked;
let i = 0;
let f = 50;

let freqs = [];
let freq;

function setup() {
  cnv = createCanvas(500, 500);
  background(0);
  osc = new p5.Oscillator("sine");
  fft = new p5.FFT(0.8);

  frameRate(20);

  for (f = 50; f < 1500; f += 5) {
    freqs.push(f);
  }

  cnv.mouseClicked(startAudio);
}

function startAudio() {
  clicked = !clicked;

  if (clicked) {
    osc.start();
    clear();
  } else {
    osc.stop();
    freqText.innerHTML = freq + "Hz";
  }
}

// function mouseClicked() {
//   clicked = !clicked

//   if (clicked) {
//     osc.start();
//     clear();
//   } else {
//     osc.stop();
//     freqText.innerHTML = freq + "Hz"
//   }
// }

function draw() {
  freq = freqs[i];
  osc.freq(freq);
  i = (i + 1) % freqs.length;

  spectrum = fft.analyze();

  push();
  noFill();
  translate(width / 2, height / 2);
  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    amp = spectrum[i];
    let r = map(amp, 0, 256, 0, 200);
    let x = r * cos(angle);
    let y = r * sin(angle);

    stroke(random(i), random(100, 200), random(50, 100), random(50, 100));
    vertex(x, y);
    vertex(y, x, r);

    line(0, 0, x, y);
  }
  endShape();
  pop();
}
