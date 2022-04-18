// //El operador Spread en arrays, permite unir datos en arrays (meter datos de diferentes arrays en un nuevo array)

// let peliculasDeAccion = ["Avengers", "Iron Man", "Capitán América"]
// let peliculasDeComedia = ["Home Alone", "Los 3 chiflados"]

// //Se le debe de poner ... antes del nombre de cada array
// let pelisTodas = [...peliculasDeAccion, ...peliculasDeComedia]

// console.log(pelisTodas)


// //Spread en objetos

// let generoComedias = {
//     nombre: "Comedia",
//     popularidad: "7 de 10"
// }

// let homeAlone = {
//     nombre: "Home Alone",
//     duracion: "120 minutos",
//     ...generoComedias  //Acá se incluyen las propiedades del genero comedias
// }

// let los3Chiflados = {
//     nombre: "Los 3 chiflados",
//     duracion: "100 minutos",
//     ...generoComedias
// }

// console.log(homeAlone)
// console.log(los3Chiflados)



//Spread Operator en función

//En esta función veremos si una persona ya vió o no una película
//Los ... indican que los parámetros serán los que se les ingrese
function peliculasVistas(...nombresDePelisVistas) {//una persona irá viendo pelis a medida que vaya alquilando las pelis, por lo cual la cantidad de parámetros necesitamos que sea variable
    console.log(nombresDePelisVistas)
}

// Acá ejecutamos la función de pelis vistas y estas van a llevar a crear una variable de tamaño n en función de las pelis que agreguemos
peliculasVistas("End Game", "Thor")  //Lo devuelve con un array de "n" posiciones
console.log(nombresDePelisVistas)

//otra forma de visualizarlo:

function peliculasVistas(...nombresDePelisVistas) {//una persona irá viendo pelis a medida que vaya alquilando las pelis, por lo cual la cantidad de parámetros necesitamos que sea variable
    for (let i = 0; i < nombresDePelisVistas.length; i++) {
        console.log("La persona ya vio " + nombresDePelisVistas[i])
    }

}

peliculasVistas("End Game", "Thor", "El pelón de Brazzers")  //Lo devuelve con un array de "n" posiciones

