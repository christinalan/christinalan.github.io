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
        img attribute("src", nextImage)
        img style.left = x + "px"
        img style.top = y + "px"
        
        document.body.appendChild(img)
        
        i = i + 1
        
        if (i >= images.length) {
        i = 0
        }
} 
      
document.addEventListener("click", function (event) {
        event.preventDefault()
        placeImage(event.pageX, event.pageY)
})
      
document.addEventListener("touchend", function (event) {
        event.preventDefault()
        placeImage(event.pageX, event.pageY)
})
