// El objeto date trae información del momento en que fué instanciado__
//con diferentes métodos podemos obtener información parte por parte:

// Se necesita instanciar en una variable
let fechaActual = new Date();

// El objeto date tiene varios métodos los cuales pueden ser ejecutados en la variable que contiene la instancia

// //to UTC lo hace más legible
// console.log(fechaActual.toUTCString());
// //Da el num del año
// console.log(fechaActual.getFullYear());
// //Da el num de mes, enero=0;
// console.log(fechaActual.getMonth());
// //Da el num de día de la semana, domingo=0;
// console.log(fechaActual.getDay());
// //Da el num de día del mes
console.log(fechaActual.getDate());

//A fechaActual que ya tiene el objeto Date le sacamos info personalizada
let anio = fechaActual.getFullYear()
let mes = (fechaActual.getMonth() + 1)
let dia = fechaActual.getDate()

console.log('Estás en el día ' + dia + ' del mes ' + mes + ' del año ' + anio);