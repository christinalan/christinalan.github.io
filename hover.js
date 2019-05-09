const slideshow = document.querySelector("section.slideshow")
<<<<<<< HEAD
const images = slideshow.querySelectorAll("img");

slideshow.addEventListener("mousemove", function(event) {
  const x = event.offsetX
  const width = this.offsetWidth

  const percentage = x / width
  const imageNumber = Math.floor(percentage * images.length)

  images.forEach(image => {
    image.style.zIndex = 0
  })

  images[imageNumber].style.zIndex = 1

=======
const images = slideshow.querySelectorAll("img")

slideshow.addEventListener("mousemove", function(event) {
  console.log(event)
>>>>>>> ab84d3fc2b0efd75a2b4e3d57acfd9adfd78e89a
})
