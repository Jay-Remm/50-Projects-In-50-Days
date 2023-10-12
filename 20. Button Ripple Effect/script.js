const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        circle.style.backgroundColor = `${randomRGB()}`

        // the 'this' keyword doesnt work with arrow functions so we canged it to a regular function at the event listener
        this.appendChild(circle)

        // We are using a set timeout to remove the circle after we add it otherwise everytime we click a new circle evement will be added to the DOM. this helps us remove it after.
        // setTimeout(() => circle.remove(), 500)
    })
})

function randomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const RGBColor = 'rgb('+ red + ', ' + green + ', ' + blue + ')';

    return RGBColor;
}