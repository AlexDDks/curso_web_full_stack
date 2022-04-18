let notas = [1, 2, 3, 4, 5, 7, 10]


// //El método map se ejecuta en un array y recibe como parámetro un callback__
// //que recorre 1 a 1 los elementos, tomando como parámetro cada uno de los elementos del array (numero)__
// //devolviendo un array con los mismos elementos que el original
// //La lógica del callback lo implementamos nosotros
// let notasAlCien = notas.map(function (numero) {
//     return numero * 10
// })
// console.log(notasAlCien)


// // Es muy parecido al map, filtra los elementos de un arrayr dependiendo de la lógica implementada__
// // recorrerá el array dado 1 a 1 (numero) y devolverá SÓLO LOS ELEMENTOS que cumplan con la condición definida
// // Se ejecuta sobre un array y recibe como parámetro un callback y dentro de este se pone las condiciones necesarias para filtrar el array
// let notasAprobadas = notas.filter(function (numero) {
//     return numero >= 7
// })
// console.log(notasAprobadas)

// //Este se ejecuta sobre un array dado, recibe como parámetro un callback el cual recorre uno a uno los elementos de este__
// //y reduce a la mínima expresión el array dado retornando como resultado un único valor, recibiendo 2 parámetros (acumulador y elemento actual)
// //En la primera iteración el acumulador tendrá el valor de 0 y el valor actual será el índice 0 del array. En la sig iteración dicho valor se guardará en el acumulador
//El reduce al no encontrar más valores en el array en la última posición, dejará de iterar y devolverá el valor último del acumulador
// let sumaDeNotas = notas.reduce(function (acumulador, numero) {
//     return acumulador + numero
// })
// console.log(sumaDeNotas)


//Itera sobre un array dado, recibe un callback que recorre el array dado, no devuelve nada, sólo itera.
//El callback recibe 2 valores donde el primero es el valor del elemento del array y el segundo su índice.
//Mostramos el indice y su valor
notas.forEach(function (valor, indice) {
    console.log('En la posición ' + (indice + 1) + ' tengo el valor ' + valor)
})
