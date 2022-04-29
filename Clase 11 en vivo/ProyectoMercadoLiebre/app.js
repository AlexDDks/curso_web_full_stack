const express = require('express')
const app = express()


app.use(express.static(__dirname + '/public'))//Se le dice a la aplicación de express que queremos usar la carpeta public como lugar para guardar archivos estáticos


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
    //res.send("hola")
})

app.listen(3000, () => {
    console.log("Servidor corriendo")
})

