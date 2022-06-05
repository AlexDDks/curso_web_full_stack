const express = require('express') //Se requiere express
const router = express.Router() //ya no nevesitamos guardar en la constante app a express ya que usamos router que tiene toda la funcionalidad del ruteo

const productosControllers = require('../controllers/productosControllers') //Se requiere al archivo del controlador correspondiente

//Una vez que desde el entry point se ha redirigido a routes, acá se busca el path que coincide con la petición, es decir cuando se haga una petición get a la ruta raiz, se manda a llamar al mainControllers en su método index y realizará la acción
//Porqué acá si se pone la ruta /about, no corre???
router.get('/', productosControllers.index) //Recibe el parámetro url, de ahi se le indica que use el controlador con el método index, el cual realizará una opción.

module.exports = router