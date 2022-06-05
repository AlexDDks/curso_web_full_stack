//No sé porqué me sale el error cannot GET en todas menos la ruta '/'
//Según el profe lalo, cuando usas el app.use y un router, estas configurando que todas las rutas de ese router tendran el prefijo que pones como
//primer parametro. Para el caso de prodducto, el prefijo es /producto entonces, todas las rutas de ese router tendran que ser accedidas como /producto/ruta
//en ese router tienes una ruta que se llama productos entonces tendrias que acceder a ella como /producto/producto
//Entonces lo solucioné quitando en el router el prefijo /producto, lo otro que se puede hacer creo es poner solo el app.use del /, y en el router poner
//el /producto, varias rutas en un solo router, aunque según lalo, la buena práctica es lo que está implementado acá

const express = require('express')
const app = express()

let rutasMain = require('./routes/main')
let rutasProductos = require('./routes/productos')

app.use('/', rutasMain) //Se aclara que todas las solicitudes a esta ruta, serán procesadas por la variable rutasMain, la cual tiene la funcionalidad del módulo del archivo main.js 
app.use('/productos', rutasProductos)

app.get('/contacto', (req, res) => { //Esta ruta no está ruteada a ningún router o controlador
    res.send('Déjanos tu contacto')
})



app.listen(3000, (req, res) => {
    console.log('Servidor funcionando');
})