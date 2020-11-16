let freqText = document.getElementById("freq");
let spectrum, osc;
let clicked;
let i = 0;
let f = 50;

let freqs = [];
let freq;

function setup() {
  createCanvas(500, 500);
  background(0);
  osc = new p5.Oscillator('sine');
  fft = new p5.FFT(0.8);
  
  frameRate(20);
  
    for (f = 50; f < 1500; f+=5) {
    freqs.push(f);
  }
}

function mouseClicked() {
  clicked = !clicked
  
  if (clicked) {
    osc.start();
    clear();
  } else {
    osc.stop();
    freqText.innerHTML = freq + "Hz"
  }
  

}

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
    vertex(y, x, r)
    
     line(0, 0, x, y);

  }
  endShape();
  pop();
}