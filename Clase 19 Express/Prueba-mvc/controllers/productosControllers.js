const path = require('path') //Se requiere el path para no tener problemas en diferentes sistemas operativos

const productosControllers = {
    index: (req, res) => { //Esta es la vista index
        res.sendFile(path.join(__dirname, '../views/products.html')) //Se manda a traer la vista  
    }
}
//Hasta acá llevamos vista-servidor-ruta-controlador
module.exports = productosControllers