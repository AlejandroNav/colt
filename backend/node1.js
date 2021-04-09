console.log("hola");
const args = process.argv.slice(2)

for (let arg of args) {
    console.log('Mi color favorito es ' + arg)
}