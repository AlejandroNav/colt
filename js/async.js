
const colors = ["Chartreuse", "FireBrick", "LightSalmon", "OliveDrab", "Snow",
    "Chocolate", "FloralWhite", "LightSeaGreen", "Orange", "SpringGreen",
    "Coral", "ForestGreen", "LightSkyBlue", "OrangeRed", "SteelBlue",
    'CornFlowerBlue', "Fuchsia", "LightSlateGray", "Orchid", "Tan",
    "Cornsilk", "Gainsboro", "LightSteelBlue", "PaleGoldenRod", "Teal"]


const delayColor = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay)
    })
}

const nombre = document.querySelector('h1')


for (let i = 0, p = Promise.resolve(); i < 24; i++) {
    p = p.then(_ => new Promise(resolve =>
        setTimeout(function () {
            document.body.style.backgroundColor = colors[i];
            nombre.innerText=colors[i]
            resolve();
        }, 1600)
    ));
}