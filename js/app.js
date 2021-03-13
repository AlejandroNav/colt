const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const allImages = document.getElementsByTagName('img')

for (const images of allImages) {
    console.log(images.src)
}

const linkys = document.querySelectorAll('p a')
for (const iterator of linkys) {
    console.log(iterator.href)

}
document.querySelector('#banner').id = "banner"
const pollPrincipal = document.querySelector('input');
let ejemplo = pollPrincipal.getAttribute('type')
pollPrincipal.setAttribute('type', ejemplo)

const silki = document.querySelector('h1');
silki.style.color = '#ff005c';
silki.style.fontSize = "95px"

const h2 = document.querySelector('h2')
h2.classList.add('purple')
h2.classList.add('border')

const nuevaImg = document.createElement('img');
nuevaImg.style.width = "1000px"
nuevaImg.src = "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80";
document.body.appendChild(nuevaImg)

const gritos = document.createElement('h2')
gritos.innerText = "Yo soy la comadreja yo soy la comadreja !!!"
gritos.style.fontSize = "50px"
gritos.style.fontFamily = "verdana"
document.body.appendChild(gritos)

silki.insertAdjacentElement('afterend', gritos)


const pokedex = document.querySelector('#container');
const apiPokemohGithub = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 899; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = ` #  ${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${apiPokemohGithub}${i}.png`
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    pokedex.appendChild(pokemon)
}

const botonJS = document.querySelector('#clic2');

botonJS.onclick = function () {
    console.log('Me diste click');
}

function grito(){
    console.log("OLA VERGHA")
}

botonJS.onmouseenter =  grito;