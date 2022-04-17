//Ambos permiten preguntar si un bloque de código cumple con una confición
//para después correr otro bloque de código

//if ternario
//No lleva llaves, se escribe horizontalmente


let fruta = 'Manzana' //condicional con?  ,,  Si se cumple la condición,,: para expresar el sino sucede la condición (es obligatorio)  
let resfruta = fruta == 'Manzana' ? 'Chido, me gustan las manzanas' : 'No gracias, quería manzanas'
console.log(resfruta) //El resultado de la comparación la pusimos en una variable para poder mostrarla en consola

let dia = 'Sábado'
let trabajo = dia == 'Sábado' ? 'También trabajas los sábados HDP' : 'Es día laboral'
console.log(trabajo)



//Switch

let semaforo = 'rojo'
//Dentro de los paréntesis va la expresión a evaluar (sin =) y de ahí se abren y cierran lla
switch (semaforo) {
    //Los case representan cada caso a evaluar
    case 'verde':
        //  Debajo del case se pone : y el código que se realizará si hay coincidencia  
        console.log('Puedo cruzar')
        //El break sirve para dejar de evaluar casos en el caso de que en este punto se haya cumplido la condición
        break;

    case 'amarillo':
        console.log('Cruza con precaución')
        break;

    case 'rojo':
        console.log('No cruces')
        break;
    //El caso default se ejecuta si ningún caso coincide con la expresión que se está evaluando
    default:
        console.log('No funciona el semáforo')

}


let altura = 3000

switch (altura) {
    case 2000: console.log('Estás llegando a 2000 metros de altura')
        break
    case 2500: console.log('Estás llegando a 2500 metros de altura')
        break
    case 3000: console.log('Estás llegando a 3000 metros de altura, estás pasado de gaver')
        break
    default: console.log('No sé dónde ching/"$% estás')
}

