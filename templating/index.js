const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    //response.sendFile(__dirname + '/index.html')
    response.send('examplewithout html')
        //console.log('this is the request from main page', request);
})

app.listen(3000, () => {
    console.log("si sirve el puerto 3000");
})