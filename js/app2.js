const randoColor = () =>{
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`
}
const boto = document.querySelector("#backButton")
boto.addEventListener('click', function(){
    document.body.style.backgroundColor = randoColor()
})
const allBoton = document.querySelectorAll(".colo")
for (const iterator of allBoton) {
    iterator.addEventListener("click",colorize)
}
const allH2s = document.querySelectorAll("h2")
for (const iterator of allH2s) {
    iterator.addEventListener("click",colorize)
}
function colorize(){
    const nuevoColor = randoColor()
    this.style.backgroundColor = nuevoColor;
    this.innerText= nuevoColor;
}
