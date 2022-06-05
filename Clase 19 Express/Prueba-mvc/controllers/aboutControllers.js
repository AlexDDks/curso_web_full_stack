const path = require('path') //Se requiere el path para no tener problemas en diferentes sistemas operativos

const aboutControllers = {
    index2: (req, res) => { //Esta es la vista index2
        res.sendFile(path.join(__dirname, '../views/about.html')) //Se manda a traer la vista  
    }
}
//Hasta acá llevamos vista-servidor-ruta-controlador
module.exports = aboutControllers