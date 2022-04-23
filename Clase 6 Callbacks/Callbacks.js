/*Es una función que pasa como parámetro de otra función. La función que recibe el callback decide cuándo utilizarlo.
Los callbacks normalmente se definen antes de pasar como parámetro.Los callbacks al pasar como parámetros NO SE DEBEN EJECUTAR
ya que la función padre decide cuándo ejecutarlo */




// //Hacemos las funciones flechas para cada operación de la calculadora

// let sumar = (numero1, numero2) => numero1 + numero2;
// let restar = (numero1, numero2) => numero1 - numero2;
// let multiplicar = (numero1, numero2) => numero1 * numero2;
// let dividir = (numero1, numero2) => numero1 / numero2;

/*Es en el return donde especificamos que el 3er parámetro sea una función que se ejecute con 2 parámetros*/
// let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2)

// console.log(calculadora(18, 3, sumar))

//Otrotipo de calculadora

// acá establecí las funciones que serán callbacks

let doble = (numero1) => numero1 * 2;
let raiz = (numero1) => Math.sqrt(numero1);

// acá establecí una función que reciba un callback
let otraCalculadora = (numero1, operacion) => operacion(numero1);

console.log(otraCalculadora(9, doble))

// let colorAuto = (tipo, color) => (tipo + ' ' + color)
// let caracteristicasDeAuto = (tipo, color, callback) => callback(tipo, color)
// console.log(caracteristicasDeAuto('bocho', 'rojo', colorAuto))

let sumar = (num1, num2) => (num1 + num2)
let calculadora = (num1, num2, operacion) => operacion(num1, num2)

console.log(calculadora(1, 2, sumar));
