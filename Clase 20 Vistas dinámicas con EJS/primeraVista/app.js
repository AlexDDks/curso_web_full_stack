const express = require('express') //Estamos mandando a traer a nuestra aplicación el módulo de express que está en la carpeta node_modules
const app = express() //Acá instanciamos y almacenamos nuestro express en la variable app
app.use(express.static('public'));
app.set('view engine', 'ejs')

//Sistema de ruteo, se comienza a trabajar la arquitectura MVC
//Cuando se entre a '/', se redirige al main.js, ahí se manda a llamar al controlador y de ahí el método del controlador realiza una acción
const routes = require('./routes/main') //Se requiere al módulo de rutas, no necesita tener el mismo nombre que el módulo
app.use('/', routes); //Cuando se entre a '/', se le aclara que vaya añ modulo routes y este sacará las rutas del main.js

app.listen(3000, () => { //Se configura el servidor
    console.log('Servidor funcionando')
})

