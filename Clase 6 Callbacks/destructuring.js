// Destructuring de arrays, permite la extracción de datos de arrayys u objetos literales en vez de tener que usar__
//la dot notation

//
let cursos = ["Programación", "Matemáticas", "CSS"]

//Crea una variable por cada índice que le asignemos
let [programacion, css] = cursos

console.log(cursos)
console.log(programacion)
console.log(css)   //A la variable css se le agrega el valor del índice 1 del array, osea "Matemáticas",__
//por ende no importa el nombre de la nueva variable.

//el nombre de la variable no afecta al string que se le va a asignar
//si queremos dejar en blanco un valor, podemos dejar en vacío el nombre de la variable
//que correspondería con esas posición, osea un , ,


//Destructuring de objetos literales
//No altera el array u objeto literal al inicio

let persona = {
    nombre: "antonio",
    edad: 26,
    domicilio: "conocido"
}
//En objetos literales, obligatoriamente tenemos que poner el nombre de la propiedad y se utilizan no corchetes sino llaves
let { nombre, edad } = persona

console.log(persona)
console.log(nombre)
console.log(edad)

//Como cada variable guarda al nombre de la propiedad, no tenemos que dejar espacios en blanco, elegimos directo a la propiedad
//Sino se encuentra la clave, entonces la variable queda indefinida