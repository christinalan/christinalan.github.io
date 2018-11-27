const images = [
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan_1_s.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan2_s.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan3_s.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan4_s.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan5_s.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan6_s.png",
        "/img/10s.png"
        "/img/lala_small.gif",
        "/img/cutafter_small.gif",
        "/img/justhands_s.jpg",
        "/img/mirrormirrorwhat_s.jpg",
        "/img/meltblackf_s.png",
        "/img/mirrormirroroppo_s.png",
        "/img/new2_s.png",
        "/img/winter1_small.jpg",
        "/img/39_s.png",
        "/img/22_s.png",
        "/img/39_s.png",
        "/img/meltblackf_s.png",
        "/img/mm2_s.png"
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
