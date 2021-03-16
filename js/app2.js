const boto = document.querySelector("button")
boto.addEventListener('click', function(){
    const nuevoColor = randoColor()
    document.body.style.backgroundColor = (nuevoColor)
    const hache1 = document.querySelector('h1')
    hache1.innerText= nuevoColor
})

const randoColor = () =>{
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`
}