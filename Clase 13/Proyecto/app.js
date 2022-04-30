const express = require('express')
const app = express()

//El objetivo de path es unificar las rutas en distintos sistemas operativos, el objetivo es llegar a la carpeta public. 
const path = require('path')

//Se le dice a express cuál es la carpeta de archivos públicos
//Se hace referencia a la carpeta de archivos públicos. A través de resolve resuelva la ruta que se le indica
const publicPath = path.resolve(__dirname, './public') //dirname hace referencia a la ubicación del archivo donde estoy (app.js), así cuando requiramos algún archivo en html como img, ya no necesitamos poner public, sino pasar directo a views

//Queremos usar archivos estáticos, static recibe la ruta donde están los archivos "public"
app.use(express.static(publicPath))//Se le dice a la aplicación de express que queremos usar la carpeta public como lugar para guardar archivos estáticos

app.listen(3000, () => {
    console.log("Servidor corriendo")
})

//Enviamos la respuesta en forma de un archivo html usando sendFile
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))//ponemos la ruta absoluta del archivo html usando dirname (no se aceptan rutas relativas)
})//Generamos ruta, cuando entremos a la ruta local 3000, respondemos con una solicitud

app.get('/2', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/pruebas.html'))//ponemos la ruta absoluta del archivo html usando dirname (no se aceptan rutas relativas)
})//Generamos ruta, cuando entremos a la ruta local 3000, respondemos con una solicitud