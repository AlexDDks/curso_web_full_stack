const path = require('path') //Se requiere el path para no tener problemas en diferentes sistemas operativos

const mainControllers = {
    registro: (req, res) => { //Esta es la vista regiatro
        res.render('register') //no se requiere poner el path o .ejs
    },

    index: (req, res) => {
        res.render('index')
    }
}

module.exports = mainControllers