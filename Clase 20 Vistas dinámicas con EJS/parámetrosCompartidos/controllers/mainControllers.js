const path = require('path') //Se requiere el path para no tener problemas en diferentes sistemas operativos

const mainControllers = {

    registro: (req, res) => { //Esta es la vista regiatro
        res.render('register') //no se requiere poner el path o .ejs
    },

    list: (req, res) => {
        //Acá definimos la variable que vamos a compartir con la vista
        let users = ['Alex', 'Mario', 'Manuel', 'Miguel']
        // Para usar la variable users en la vista hacemos lo siguiente en el res.render:
        //Como segundo parámetro hacemos un objeto literal con las variables (el users), pero debemos de
        //ponerle un identificador entre ''('users) el cual será usado posteriormente
        res.render('userList', { 'users': users }) //Como valor de la propiedad pasamos la variable que queremos compartir a la vista
    },

    index: (req, res) => {
        res.render('index')
    }
}

module.exports = mainControllers


