const express = require('express')
const router = express.Router()


//Así si me corrió el sistema de ruteo, mi duda es porquébno me corre de manera individual en cada archivo Controllers como el about, aunque el about tampoco jala sino usamos la ruta raiz en el archivo routes :/
const mainControllers = require('../controllers/mainControllers')
router.get('/', mainControllers.index)
router.get('/products', mainControllers.products)

module.exports = router