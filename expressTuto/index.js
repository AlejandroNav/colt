const express = require("express")
const app = express()

//app.use((req, res) => {
//console.log("I got a request");
//    res.send('<h1> HOLA PAGINA </h1>')
//})
app.get('/', (req, res) => {
    console.log("I got a request");
    res.send('<h3>This is the root and </h3>')
})
app.get('/cats', (req, res) => {
    console.log("I got a request");
    res.send('<h1> HOLA PAGINA MEOW </h1>')
})
app.get('/dogs', (req, res) => {
    console.log("I got a request");
    res.send('<h1> HOLA PAGINA WOOF</h1>')
})

app.listen(3000, () => {
    console.log('Listening in 3000');
})