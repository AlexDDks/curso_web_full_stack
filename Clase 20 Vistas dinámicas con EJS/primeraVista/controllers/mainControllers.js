const path = require('path') //Se requiere el path para no tener problemas en diferentes sistemas operativos

const mainControllers = {//Dentro del método res, está el método render, el cual se encarga de recibir un string que será el nombre del archivo de la vista a usar, y de ahí s erenderizará, No es necesario definir la extensión del archivo 
    index: (req, res) => { //Esta es la vista index
        res.render('index') //no se requiere poner el path o .ejs
    },

    registro: (req, res) => { //Esta es la vista regiatro
        res.render('registro') //no se requiere poner el path o .ejs
    }
}

module.exports = mainControllers