const { log } = require('console');
const fs = require('fs')

for (let index = 0; index < 5; index++) {
    console.log([index]);

}
const foldername = process.argv[2] || "Project"
const htmlname = process.argv[3] || "index"
const cssname = process.argv[4] || "style"
const jsname = process.argv[5] || "script"

let ht = (`${foldername}/${htmlname}.html`);
let cs = (`${foldername}/${cssname}.css`);
let js = (`${foldername}/${jsname}.js`);

fs.mkdirSync(foldername)
fs.writeFileSync(ht, '')
fs.writeFileSync(cs, '')
fs.writeFileSync(js, '')