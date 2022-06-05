const path = require('path')

mainControllers = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/main.html'))
    },
    products: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products.html'))
    }
}

module.exports = mainControllers