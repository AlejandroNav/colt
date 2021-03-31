
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
            nombre.innerText = colors[i]
            resolve();
        }, 1300)
    ));
}

const helloW = async () => {
    throw new Error('errar es de humanos')
    return "Hola que onda amigos"
}

helloW()
.then(data =>{
    console.log("Promesa resuelta con: ", data)
})
.catch(err =>{
    console.log("Promesa recehzada con: ", err)
})


const req = new XMLHttpRequest();

req.onload = function () {
    console.log("REQUEST BEIN TERMINADA");
    const data1 = JSON.parse(this.responseText);
    console.log(data1.ticker.price);
}
req.onerror = function () {
    console.log("nunca contesto la api");
    console.log(this);
}

req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
req.send();