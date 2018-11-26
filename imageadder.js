const images = [
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan_1.png",
        "/Slantd_Issue02_LooseSkins_ChristinaLan5.png",
        "/img/10s.png"
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan4.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan5.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan6.png",
        "/img/lala.gif",
        "/img/cutafter_foreverb&w.gif",
        "/img/justhands.jpg",
        "/img/mirrormirrorwhat.jpg",
        "/img/mirrormirroroppo.png",
        "/img/new2.png",
        "/img/winter.jpg",
        "/img/winter1.jpg",
        "/img/39.png",
        "/img/22.png"
        ]

let i = 0

function placeImage(x, y) {

        const nextImage = Math.floor(Math.random() * 15 + 1);

        const img = document.createElement("img")
        img.setAttribute("src", nextImage)
        img.style.left = x + "px"
        img.style.top = y + "px"
        img.style.transform = "translate(-50%, -50%) scale(0.25) rotate(" + (Math.random() * 180-10) + "deg)"

        document.body.appendChild(img)

        i = i + 1

}

let mouse = 0

document.addEventListener("mouseover", function (event) {
        event.preventDefault()
        mouse = mouse + 1
        if (mouse % 3 == 0) {
        placeImage(event.pageX, event.pageY)
        }
})

document.addEventListener("touchend", function (event) {
        event.preventDefault()
        placeImage(event.pageX, event.pageY)
})
