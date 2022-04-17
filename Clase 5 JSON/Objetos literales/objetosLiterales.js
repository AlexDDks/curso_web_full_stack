let curso = {
    cantidadDeAlumnos: 32,
    docentes: ['Nacho, Javier'], //Como son mas de 2, se pone en array
    horario: 'de 19 a 21 horas',
    notificacion: function () { //Si queremos que alguna clave realice una acción, se le asigna una función
        return ('El horario del curso es ' + this.horario)//El .this es un sinónimo del curso., solo que se usa exclusivamente dentro de la función, pasa lp mismi si ponemos curso., pero la buena práctica dice que se use el this
    }
}



// // console.log('La cantidad de alumnos es: ' + curso.cantidadDeAlumnos); //Con la dot notation podemos acceder a propiedades específicanos
// console.log(curso.notificacion());


//CONSTRUCTOR DE OBJETOS, (función molde)

function Cursos(cantidadDeAlumnos, docentes, horario) {  //En funciones contructoras, estas arrancan con mayúsculas
    this.cantidadDeAlumnos = cantidadDeAlumnos //Se le dice a la función que el valor de can..Alu..es igual a lo que se reciba
    this.docentes = docentes
    this.horario = horario
}

let programacion = new Cursos(50, ['Erick y Tetyana'], 'de 8 a 10 AM')//Se instancia (se crea un objeto lit, a partir de una función molde, con la palabra reservada new, se crea objeto del tipo Curso (de ahí el objeto conoce los parámetros que irán))

console.log(programacion)