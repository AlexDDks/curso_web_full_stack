//Arrow function son las típicas funciones del lenguaje, sólo que esritas diferente y deben ser asigandas como valor a una variable__
//si sólo hay una sentencia de código la cual se va a retornar no es necesaria las llaves o el return.

let laMitad = numero => numero / 2 //La función es anónima, si queremos ponerle un nombre la debemos asignar a una variable,
//La flacha => reemplaza a la palabra funtion, lo que está a la izquierda es la entrada y a la derecha el return
//Si sólo tenemos 1 parámetro, podemos precindir del paréntesis.

console.log(laMitad(8)) //Llamamos a la función por el nombre de la variable


//Varios ejemplos del reemplazo de la función normal por funciones flecha
let dividir = (A, B) => A / B

console.log(dividir(20, 4))

let trabajar = dia => { //Todo lo que está dentro de las llaves cuenta como return y y aque tenemos mas de una sentencia, entonces si tenemos que usar llaves
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
