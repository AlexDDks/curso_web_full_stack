// console.log('Aplicación de tareas')

// Objeto literal

// let tarea = {
//     título: "Practicar el switch",
//     descripción: 'Entender en qué puedo usarlo',
//     estado: 'Pendiente'
// }

// Arreglo de tareas

// let tareas = [{
//     título: "Practicar el switch",
//     descripción: 'Entender en qué puedo usarlo',
//     estado: 'Pendiente'
// },

// {
//     título: "Practicar el for",
//     descripción: 'Entender en qué puedo usarlo',
//     estado: 'En progreso'
// },

// {
//     título: "Entender el objeto literal y JSON",
//     descripción: 'Entender en qué puedo usarlo',
//     estado: 'Pendiente'
// }
// ]

// let tareaNueva = {
//     título: "Practicar inglés",
//     descripción: 'Entender en qué puedo usarlo',
//     estado: 'Pendiente'
// }

// tareas.push(tareaNueva)

// console.log(tareas[0])
// console.log(tareas[1].título)

// for (let i = 0; i < tareas.length; i++) {
//     console.log(i + 1 + ' - ' + tareas[i].título)
//     console.log(i + 1 + ' - ' + tareas[i].estado)
// }

//console.log(JSON.stringify(tareas))

// let stringTareas = JSON.stringify(tareas)
// console.log(stringTareas)




let estudiantes = [
    { nombre: 'John', promedio: 8.5, aprobado: true },
    // { nombre: 'Jane', promedio: 7, aprobado: true },
    // { nombre: 'June', promedio: 3, aprobado: false },
]


let aprobados = estudiantes[i].filter(function (aprobado) {
    return aprobado.promedio = true
})

console.log(aprobados)