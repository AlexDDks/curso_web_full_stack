// Se instala express y ejs primero
const express = require('express')
const app = express()

// Se le dice a express que queremos usar a ejs como nuestro template engine mediante el método set. El 1er. parámetro no cambia, el segundo dicta que template se usa
app.set('view engine', 'ejs')  //ejs es un motor de renderización de vistas Definimos el motor de plantillas que queremos utilizar, en este caso le decimos que vamos a utilizar EJS

//El método set sobre la variable app ya se encarga de decir en dónde están las views
app.use(express.static('./public'))
//Para express todos los archivos en al app son privados y no son enviados en el response de un request
// con la línea de express.static lo que hace es indicarle a express que es una carpeta donde hay archivos
// públicos que pueden ser accedidos sin tener que ser accedidos sin tener que solicitarlos con un request, estos son llamados estáticos

// TODOS LOS DOCUMENTOS EJS deben de ir en la carpeta views, donde express buscará, obvio se
// puede cambiar el nombre pero es otro pedo, usaremos __dirname

// __dirname es una varable nativa cuya función es obtener la ruta exacta del archivo donde nos encontramos
