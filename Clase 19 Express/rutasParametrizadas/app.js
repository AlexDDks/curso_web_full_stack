const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Bienvenidos al sitio')
})

app.get('/contacto', (req, res) => {
    res.send('Déjanos tu contacto')
})

//El :id representa a algo que se escribe después de la ruta y puede tener cualquier valor (el parámetro será obligatorio a menos que usermos el ? al final del parámetro de la ruta)
app.get('/productos/:idProductos?', (req, res) => { //Se asigna una ruta parametrizada que sea opcional con el ?
    res.send('Bienvenidos al detalle del producto ' + req.params.idProductos) //Req es una variable con varios datos del pedido y del pedido queremos la propiedad params, el parámetro idProducto se requiere con el punto
    //Para recuperar el valor que nos llega desde la ruta usamos el objeto literal request con la propiedad params (obj. lit) con propiedad:valor, donde propiedad
    //es el valor que se le da al parámetro en la ruta y el valor será el que diga la URL 
})

//     app.get('/productos/:idProductos/comentarios', (req, res) => {
//     res.send('Bienvenidos a los comentarios del producto ' + req.params.idProductos) //Req es una variable con varios datos del pedido y del pedido queremos la propiedad params, el parámetro idProducto se requiere con el punto
//     //Acá lo que se hizo fue parametrizar el producto y especificar que es su página de comentarios
// })

app.get('/productos/:idProductos/comentarios/:idComentarios?', (req, res) => { //Se asigna una ruta parametrizada que sea opcional
    //Acá lo que se hace es que el usuario pueda entrar a un comentario específico de un producto en específico
    if (req.params.idComentarios == undefined) {
        res.send('Bienvenidos al detalle del producto ' + req.params.idProductos)
    }
    //Si el usuario no especifica un comentario en particular, entonces únicamente decimos que estamos en los detalles de un producto
    else {
        res.send('Bienvenidos a los comentarios del producto ' + req.params.idProductos + ' y estás enfocado en el comentario ' + req.params.idComentarios)
        //Si el usuario especifica un comentario, entonces ponemos el mensaje completo de que estamos en x valor de comentario
    }
})


app.listen(3000, (req, res) => {
    console.log('Servidor funcionando');
})