const images = [
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan_1_s.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan2_s.png",
        "/img/lala_s.gif",
        "/img/justhands_s.jpg",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan3_s.png",
        "/img/10s.png",
        "/img/scarf2.gif",
        "/img/cutafter_forever_s.gif",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan4_s.png",
        "/img/22s.png",
        "/img/honey2.gif",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan5_s.png",
        "/img/weird_s.gif",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan6_s.png",
        "/img/34s.png",
        "/img/winter1_s.jpg",
        "/img/cutafter_forever_s.gif",
        "/img/mirrormirrorwhat_s.jpeg",
        "/img/39_s.png",
        "/img/meltblackf_s.png",
        "/img/mirrormirroroppo_s.png",
        "/img/new2_s.png",
        "/img/mm2_s.png",
        "/img/DSC_2267_small.jpeg",
        ]

let i = 0

function placeImage(x, y) {

        const nextImage = images[i]

        const img = document.createElement("img")
        img.setAttribute("src", nextImage)
        img.style.left = x + "px"
        img.style.top = y + "px"
        img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 180 - 10) + "deg)"

        document.body.appendChild(img)

        i = i + 1

        if (i >= images.length) {
          i = 0
        }

}

let mouse = 0

document.addEventListener("mouseover", function (event) {
        event.preventDefault()
        mouse = mouse + 1
        if (mouse % 2 == 0) {
        placeImage(event.pageX, event.pageY)
        }
})

document.addEventListener("touchend", function (event) {
        event.preventDefault()
        placeImage(event.pageX, event.pageY)
})
