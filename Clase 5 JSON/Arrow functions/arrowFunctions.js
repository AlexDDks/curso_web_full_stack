let laMitad = numero => numero / 2 //La función es anónima, si queremos ponerle un nombre la debemos asignar a una variable,
//La flacha => reemplaza a la palabra funtion, lo que está a la izquierda es la entrada y a la derecha el returN
//Si sólo tenemos 1 parámetro, podemos precindir del paréntesis.

console.log(laMitad(8)) //Llamamos a la función por el nombre de la variable


//Varios ejemplos del reemplazo de la función normal por funciones flecha
let dividir = (A, B) => A / B

console.log(dividir(20, 4))

let trabajar = dia => { //Todo lo que está dentro de las llaves cuenta como return
    if (dia == 'Sábado' || dia == 'Domingo') {
        return 'No tienes que trabajar'
    }
    else {
        return 'Sí tienes que trabajar, ni p2'
    }
}

console.log(trabajar('x'))
console.log(trabajar('Sábado'))

let saludar = nombre => 'Hola, ' + nombre + '!'
console.log(saludar('Ezequiel'));
