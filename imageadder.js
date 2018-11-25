const images = [
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan_1.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan5.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan3.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan4.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan5.png",
        "/img/Slantd_Issue02_LooseSkins_ChristinaLan6.png"
        ]

let i = 0

function placeImage(x, y) {

        const nextImage = images[i]

        const img = document.createElement("img")
        img.setAttribute("src", nextImage)
        img.style.left = x + "px"
        img.style.top = y + "px"
        img.style.transform = "translate(-50%, -50%) scale(-0.5) rotate(" + (Math.random() * 20-10) + "deg)"

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
        if (mouse % 20 == 0) {
        placeImage(event.pageX, event.pageY)
        }
})

document.addEventListener("touchend", function (event) {
        event.preventDefault()
        placeImage(event.pageX, event.pageY)
})
