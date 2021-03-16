const randoColor = () =>{
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    let isDark = false
    if (r+g+b <= 220 || r <= 40  && g <= 200 || g <= 40  || b <= 40 && g <= 200 ) {
        isDark = true
    }
    return [`rgb(${r},${g},${b})`,isDark] 

}
const boto = document.querySelector("#backButton")
boto.addEventListener('click', function(){
    let newCol = randoColor()
    document.body.style.backgroundColor = newCol[0]
})
const allBoton = document.querySelectorAll(".colo")
for (const iterator of allBoton) {
    iterator.addEventListener("click",colorize)
}
const allH2s = document.querySelectorAll("h2")
for (const iterator of allH2s) {
    iterator.addEventListener("click",colorize)
    // iterator.addEventListener("keydown",colorize)
}

const input1 = document.querySelector("#inp")
input1.addEventListener('keydown',colorize)

const input = document.querySelector("#inp")
input.addEventListener('keydown',function(evt){
    console.log("abajo " + evt.key + " " + evt.code )
})

window.addEventListener('keydown' ,function(evt){
    if (evt.code=="ArrowUp") {
        console.log("EN OF Fucking WOerld")
    }
})

function colorize(){
    const nuevoColor = randoColor()
    this.style.backgroundColor = nuevoColor[0];
    this.innerText= nuevoColor[0];
    if (nuevoColor[1]) {
        this.style.color = "white";
    }
}


const formy = document.querySelector("#formComment")

formy.addEventListener('submit',function(e){
    e.preventDefault();
    const usu = formy.elements.user
    const com =  formy.elements.comment
    addComment(usu.value,com.value)
    usu.value='';
    com.value='';

});

const addComment= (usu,com) => {
    const comentarioNuevo = document.createElement('li');
    const btag = document.createElement('b');
    btag.append(usu);
    comentarioNuevo.append(btag);
    comentarioNuevo.append(` - dice que : ${com}`);
    const contenedorComs = document.querySelector('#comentarioTabla');
    contenedorComs.append(comentarioNuevo);
}


// formComentario.addEventListener('submit',function(evt){
//     console.log("submited")
// });