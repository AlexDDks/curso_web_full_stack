// //Levantando servidor con Express

// let express = require('express'); //Acá se requiere al módulo express

// let app = express() //en esta variable están todas las funcionalidades de express, guarda la ejecución de todo express

/*Usaremos el método listen indicando el puerto donde queremos que se ejecute la aplicación, como 2o parámetro se pasa un 
callback con un console.log para saber que se levantó de manera correcta el servidor*/

// //El método listen, levanta un servidor
// app.listen(3000, () => {   //listen pone a correr un servidor y pone a "escuchar" si existe algún pedido en el puerto 3000
//     console.log('Servidor corriendo')
// })

////se le pide el método get al objeto app que tiene un pedido en la ruta /, la consecuencia es enviar como respuesta lo del res.send
// app.get('/', function (req, res) {  
//     res.send('Bienvenidos al sitio')
// })


// //ROUTING Y RESPONSE


// let express = require('express');
// let app = express()
// app.listen(3000, () => {
//     console.log('ESTO FUE EXITOSO')
// })

/* Monta una ruta que responde al verbo get ('/' por ejemplo esto responde a la raiz del sitio) 
la function es la consecuencia de lo que sucede cuando el usuario ingresa a la barra*/

// app.get('/', function (req, res) {
//     res.send('Bienvenidos al sitio')//res.send envía una respuesta al navegador
// })

// app.get('/contacto', function (req, res) {
//     res.send('Déjanos tu contacto')
// })

// app.get('/unarray', function (req, res) {
//     res.send([1, 2, 3, 4, 5])
// })

// app.get('/unobjeto', function (req, res) {
//     res.send({ name: "Darío" })
// })
// //Cada que hacemos f5 en una página, recargamos usando un pedido por GET. Por eso utilizamos acá el GET







//Estructura de carpetas y Send file

const express = require('express');

const path = require('path')//este módulo genera rutas más cómodas para express (ruta absoluta)
const app = express()

app.listen(3000, () => {
    console.log('ESTO FUE EXITOSO')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))//join quie sabe para qué, pero se necesita, dirname hace referencia al directorio del archivo ejecutando, finalmente el nombre del archivo y listo

})
