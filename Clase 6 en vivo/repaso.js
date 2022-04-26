// Retomar arrays
// let array = [] //array inicializado

// array.push() //Ya son conocidos, por eso no hay ejemplos
// array.pop()
// array.shift()
// array.unshift()
// array.indexOf()



///////////////////////////

// array.forEach() //itera en cada uno de los elementos del arrglo sin retornar un valor
//let dias = ["Lunes", "Martes", "Miércoles"]
// dias.forEach(dia => console.log(dia))  //el item dia, es el elemento en el que iterará cada elemento del array, osea ocupa el valor de lunes, en el siguiente ciclo martes y asi....



////////////////////////////

// array.map()  //itera sobre un arreglo en cada uno de sus elementos y retorna un arreglo ordenado dependiendo la regla que pongamos
// let arregloDiasNuevo = dias.map(function (item, index, arregloAObtener) {//es el que nos muestra, la variable nueva))//recibe 3 parámetros ya que retorna algo
//     Reglas para el arreglo nuevo
//     return item //retorna un arreglo nuevo que se almacena en arregloDiaNuevo, estoy metiendo al item en él
// })
// console.log(dias)
// console.log(arregloDiasNuevo)



//////////////////////////

// array.filter() //Itera y busca entre los elementos de un arreglo con todos los elementos que cumplan la condición
// let numeros = [1, 4, 25, 53, 25, 666, 16, 50, 0, 1, 49] //devolver aquellos mayores a 100
// nuevoArreglo = numeros.filter(function (item) {
//     return item > 100  //Regresa números mayores a 100
// })
// console.log(nuevoArreglo)

// nuevoArreglo2 = numeros.filter(function (item) {
//     return item > 0 && item < 50  //Regresa números entre 1 y 49
// })
// console.log(nuevoArreglo2)


//////////////////////////////


// // array.reduce()  //Itera sobre cada elemento de un array y devuelve un valor único, este no devuelve arreglo sino un valor
// let nuevoValor = numeros.reduce(function (acumulador, valorActual) {
//     return acumulador + valorActual
// })
// console.log(nuevoValor)


///////////////////////////


// let array = [{
//     cantidad: 2221
// },
// {
//     cantidad: 91929
// },
// {
//     cantidad: 3.1416
// }]

// for (let i = 0; i > array.length; i++) {
//     console.log(array[i].cantidad)
// }


//Lo mismo del anterior pero con el for of
//El for of sirve para recorrer arreglo de objetos
// for (let value of array) { //value es todas las posiciones del arreglo, item es el nombre del arreglo
//     console.log(value.cantidad)//le decimos: dentro de las llaves qué propiedad quiero
// }
