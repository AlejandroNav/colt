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
silki.style.fontSize= "95px"

const h2 = document.querySelector('h2')
h2.classList.add('purple')
h2.classList.add('border')