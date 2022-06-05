// Igual solo me funciona con el main ... REVISAR ARCHIVO CLASE EN VIVO MVC, AHÍ SE SOLUCIONÓ, Y LA DE SISTEMA DE RUTEO DE PLAYGROUND, AHÍ PUSE TEORÍA Y SOLUCIÓN

const express = require('express')
const app = express()

const aboutes = require('./routes/about')
app.use('/about', aboutes);

const main = require('./routes/main')
app.use('/', main)


const productos = require('./routes/productos')
app.use('/products', productos);

app.listen(3000, (req, res) => {
    console.log('Servidor funcionando')
})