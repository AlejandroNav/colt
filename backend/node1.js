const fs = require('fs');

console.log("hola");
const args = process.argv.slice(2)

for (let arg of args) {
    console.log('Mi color favorito es ' + arg)
}

fs.mkdir ('Dogs', {recursive:true},(err) =>{
    console.log("Inside the Callback");
    if (err) {
        throw err;
    }
});
console.log("after mkdir !!!!!!!");

fs.mkdirSync(args[1]);   