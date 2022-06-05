const express = require('express') //Se requiere express
const router = express.Router() //ya no nevesitamos guardar en la constante app a express ya que usamos router que tiene toda la funcionalidad del ruteo

const aboutControllers = require('../controllers/aboutControllers') //Se requiere al módulo del controlador correspondiente

//Una vez que desde el entry point se ha redirigido a routes, acá se busca el path que coincide con la petición, es decir cuando se haga una petición get a la ruta raiz, se manda a llamar al mainControllers en su método index y realizará la acción
//Porqué acá si se pone la ruta /about, no corre???
router.get('/', aboutControllers.index2) //Recibe el parámetro url ,(no hay que poner /about, ya que eso se estableció en el entry point, si se pone, tendríamos que acceder a /about/about) de ahi se le indica que use el controlador con el método index2, el cual realizará una opción.

module.exports = router