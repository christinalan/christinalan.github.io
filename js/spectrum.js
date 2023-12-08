let lowerSpect;
let upperSpect;

window.addEventListener("load", function () {
  fetch("json/spectrum.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.SpectrumBands.SpectrumBand);
      dataSpectrum = data.SpectrumBands.SpectrumBand;
      randomSpectrum = Math.floor(
        Math.random() * data.SpectrumBands.SpectrumBand.length
      );

      lowerSpect = dataSpectrum[randomSpectrum].lowerBand;
      upperSpect = dataSpectrum[randomSpectrum].upperBand;
      console.group(lowerSpect, upperSpect);
    });
});

function setup() {
  createCanvas(500, 500);
}

function draw() {
  fill(0, 102, 153);
  text(lowerSpect, 200, 200);
}
