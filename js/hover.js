// hover effect from SuperHi
const slideshow = document.querySelector("section.slideshow");
const images = slideshow.querySelectorAll("img");

slideshow.addEventListener("mousemove", function (event) {
  const x = event.offsetX;
  const width = this.offsetWidth;

  const percentage = x / width;
  const imageNumber = Math.floor(percentage * images.length);

  images.forEach((image) => {
    image.style.zIndex = 0;
  });

  images[imageNumber].style.zIndex = 1;
});

slideshow.addEventListener("click", function (event) {
  event.preventDefault();
});

//this code is from https://www.sitepoint.com/javascript-media-queries/

if (matchMedia) {
  const mq = window.matchMedia("(min-width: 640px)");
  mq.addEventListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  const msg = (mq.matches ? "more" : "less") + " than 640 pixels";
  const y = onclick.offsetY;
  const newWidth = this.offsetWidth;

  const percentage = y / newWidth;
  const imageNumber = Math.floor(percentage * images.length);

  images.forEach((image) => {
    image.style.zIndex = 0;
  });
  images[imageNumber].style.zIndex = 1;
}
