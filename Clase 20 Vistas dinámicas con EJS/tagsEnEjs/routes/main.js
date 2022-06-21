const express = require('express') //Se requiere express
const router = express.Router() //ya no nevesitamos guardar en la constante app a express ya que usamos router que tiene toda la funcionalidad del ruteo


const mainControllers = require('../controllers/mainControllers') //Se requiere al módulo del controlador correspondiente

//Una vez que desde el entry point se ha redirigido a routes, acá se busca el path que coincide con la petición, es decir cuando se haga una petición get a la ruta raiz, se manda a llamar al mainControllers en su método index y realizará la acción
router.get('/', mainControllers.index) //Recibe el parámetro url, de ahi se le indica que use el controlador con el método index, el cual realizará una opción.
router.get('/register', mainControllers.registro) //En el playground, ellos usan este sistema de ruteo, todo a un mismo controlador

module.exports = router