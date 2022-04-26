// //Instalar el módulo express (ya se hizo antes de este punto)
// const express = require('express')

// //Creamos una variable que va a contener al framework/servidor
// const app = express()

// //Hacemos la ruta, en este caso raiz y le decimos qué hacer
// app.get('/', (req, res) => {
//     res.send('Hola Mundo!')
// })

// //Levantamos el servidor en el puerto 3030
// app.listen(3030, () => {
//     console.log('Servidor corriendo en el puerto 3030')
// })




// Enviar una vista completa html utilizando el método sendFile, segunda parte del desafío

//path Trae la ubicación de donde esté el archivo en la compu
const path = require('path')
const express = require('express')
const app = express()
//forzamos a que utilice la carpeta public
app.use(express.static('Public'))

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/index.html'))
})//La variable dirname trae la ruta completa del archivo

app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/babbage.html'))
})

app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/berners-lee.html'))
})

app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/clarke.html'))
})

app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/hamilton.html'))
})

app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/hopper.html'))
})

app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/lovelace.html'))
})

app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/turing.html'))
})