//Tengo problemas al renderizar el /register, no pude usar los tags

// Ejs trae etiquetas nuevas(ESPECIALES) para implementar lógica de JS
// tal como si estuviéramos en un documento tradicional JS, como por ejemplo
// utilizar condicionales o bucles. El documento tiene que ser. ejs, Ejemplo en la vista register



const express = require('express') //Estamos mandando a traer a nuestra aplicación el módulo de express que está en la carpeta node_modules
const app = express() //Acá instanciamos y almacenamos nuestro express en la variable app
app.use(express.static('public'));
app.set('view engine', 'ejs') //Definimos el motor de plantillas que queremos utilizar, en este caso le decimos que vamos a utilizar EJS

//Sistema de ruteo
//Cuando se entre a '/', se redirige al main.js, ahí se manda a llamar al controlador y de ahí el método del controlador realiza una acción
const routes = require('./routes/main') //Se requiere al módulo de rutas, no necesita tener el mismo nombre que el módulo
app.use('/', routes); //Cuando se entre a '/', se le aclara que vaya añ modulo routes y este sacará las rutas del main.js

app.listen(3000, () => { //Se configura el servidor
    console.log('Servidor funcionando')
})


