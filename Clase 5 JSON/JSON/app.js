//En los sitios web muchas veces usamos recursos de otros sitios, por ejemplo el clima, etc.los cuales viajan como texto plano, sin codificaciones especiales__
//Puede que los sitios tengan arquitecturas no compatibles, por lo que se necesita un formato de datos "JSON"__
//JS object notation es un formaato de texto sencillo para el intercambio de datos, es una cadena de texto que todos__
//los lenguajes de programación pueden entender.
//Es un objeto literal dentro de un array que se puede convertir a alguno de los dos

//JSON es una cadena de texto simple que es ideal para trasnmitir info entre sitios y apps web, en esta sólo se admiten comiilas dobles__
//y la clave y propiedades las deben de llevar. No admite métodos, sólo propiedades y valores 

//Tenemos el objeto nativo JSON que tiene los métodos parse y stringify



//CON ARRAY
// let amigos = ['Jennifer, Memo, Lalo, Luis']

// let amigosJSON = JSON.stringify(amigos) //de array u objeto literal a JSON

// console.log(amigosJSON);

// let amigosOriginal = JSON.parse(amigosJSON) //pasamos de formato JSON a array

// console.log(amigosOriginal);



//CON OBJETO LITERAL
let persona = {
    nombre: 'Helena',
    edad: 22,
    Diección: 'Calle falsa'
}

console.log(persona);

let personaJSON = JSON.stringify(persona)

console.log(personaJSON);

let personaOriginal = JSON.parse(personaJSON)

console.log(personaOriginal)