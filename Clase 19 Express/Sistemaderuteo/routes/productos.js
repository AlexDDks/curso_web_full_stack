const express = require('express')
const router = express.Router()

router.get('/:idProductos?', (req, res) => { //Se asigna una ruta parametrizada que sea opcional
    res.send('Bienvenidos al detalle del producto ' + req.params.idProductos) //Req es una variable con varios datos del pedido y del pedido queremos la propiedad params, el parámetro idProducto se requiere con el punto
})

router.get('/:idProductos?/comentarios/:idComentarios?', (req, res) => { //Se asigna una ruta parametrizada que sea opcional
    if (req.params.idComentarios == undefined) {//Se le pone el req según porque el id de comentarios está en el request
        res.send('Bienvenidos al detalle del producto ' + req.params.idProductos)
    }
    else {
        res.send('Bienvenidos a los comentarios del producto ' + req.params.idProductos + ' y estás enfocado en el comentario ' + req.params.idComentarios)
    }
})


module.exports = router