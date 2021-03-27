
const delayColor = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.background = newColor;
        doNext();
    }, delay)
}

delayColor("olive", 600)

let colors = ["Chartreuse", "FireBrick", "LightSalmon", "OliveDrab", "Snow",
    "Chocolate", "FloralWhite", "LightSeaGreen", "Orange", "SpringGreen",
    "Coral", "ForestGreen", "LightSkyBlue", "OrangeRed", "SteelBlue",
    'CornFlowerBlue', "Fuchsia", "LightSlateGray", "Orchid", "Tan",
    "Cornsilk", "Gainsboro", "LightSteelBlue", "PaleGoldenRod", "Teal"]


    for (const key of colors) {
        delayColor(key, 600)
        console.log(key);
    }
    