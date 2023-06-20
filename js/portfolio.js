window.addEventListener('load', (e) => {
    document.querySelectorAll('a').forEach((link)=>{
        const letters = link.innerHTML.split('');
        link.innerHTML = '';

        letters.forEach((text)=> {
            const span = document.createElement('p');
            span.appendChild(document.createTextNode(text));
            link.appendChild(span)
            span.style.display = "inline-block"
            // span.style.float = "left"

        })
    })
})


document.addEventListener('mousemove', (event) => {
    const x = event.pageX
    const y = event.pageY
    
    document.querySelectorAll('p').forEach(letter => {
        const dx = letter.offsetLeft + 50 - x
        const dy = letter.offsetTop + 50 - y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const score = Math.exp(dist * -0.005)
        

        // letter.innerHTML = score.toFixed(1)

        letter.style.transform = "scale(" + 1.5 * score +")"
        letter.style.display = "inline-block"
        letter.style.letterSpacing = 20 * score + "20px"
        letter.style.fontWeight = 100 + (200 * Math.round(6 * score))
    })

})