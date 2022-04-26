//Módulo nativo de Node.js que se utiliza para leer archivos almacenados en nuestro servidor

const fs = require('fs')

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, "utf-8"))
    }
}

console.log(archivoTareas.leer())
