const fs = require('fs');

// Crear funcion escribirJSON([])

// Crear funcion guardarTarea(tarea nueva) {
    // Guardar esta tarea en el arreglo que tiene la función leer
    // Actualizar el json (haciendo uso escribirJSON)
// }

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

}

module.exports = archivoTareas;