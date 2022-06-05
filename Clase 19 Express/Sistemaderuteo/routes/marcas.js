let express = require('express')
let router = express.Router()

router.get('/marcas', (req, res) => {
    res.send('Bienvenido al apartado de marcas')
})

module.exports = router