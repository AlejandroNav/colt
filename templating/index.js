const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (request, response) => {
    //response.sendFile(__dirname + '/index.html')
    response.render('home.ejs')
        //console.log('this is the request from main page', request);
})

app.get('/rand', (req, res) => {
    res.render('random')
})

app.listen(3000, () => {
    console.log("si sirve el puerto 3000");
})