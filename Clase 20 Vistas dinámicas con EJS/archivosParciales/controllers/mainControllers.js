const path = require('path') //Se requiere el path para no tener problemas en diferentes sistemas operativos

const mainControllers = {

    registro: (req, res) => { //Esta es la vista registro
        res.render('register') //no se requiere poner el path o .ejs
    },

    list: (req, res) => {
        let users = ['Alex', 'Mario', 'Manuel']
        // Para usar la variable users en la vista hacemos lo siguiente en el res.render:
        //Como segundo parámetro hacemos un objeto literal con las variables (el users), pero debemos de
        //ponerle un identificador entre ''('users) el cual será usado posteriormente
        res.render('userList', { 'users': users })
    },

    index: (req, res) => {
        res.render('index')
    }
}

module.exports = mainControllers


