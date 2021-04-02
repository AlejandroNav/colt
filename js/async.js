
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
    .then(data => {
        console.log("Promesa resuelta con: ", data)
    })
    .catch(err => {
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

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("response a partsear", res);
//         return res.json()
//     })
//     .then(data => {
//         console.log("response parseada:", data.ticker.target);

//     })
//     .catch(err => {
//         console.log("Oh no erores", err);
//     })

const bitPrice = async () => {
    try {
        console.log("wawa wewea");
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json()
        console.log(`El precio de Bitcoin es de ${data.ticker.price} ${data.ticker.target}`);
    } catch (error) {
        console.log("errores: ", error);
    }
}

bitPrice();

axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(res => {
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("error de ", err);
    })

const divJoke = document.querySelector('#joke')
const button = document.querySelector('button')

const dadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    divJoke.innerHTML = res.data.joke
    
}
dadJoke()
button.addEventListener('click',dadJoke)


// *****************Parte del app de tv***********************
const form = document.querySelector('#searchForm')

form.addEventListener('submit', async function (e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    console.log(searchTerm);
    const result = await axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`)
    console.log(result.data.image.medium);
    const img = document.createElement('IMG');
    img.src = result.data.image.medium
    document.body.append(img)
})