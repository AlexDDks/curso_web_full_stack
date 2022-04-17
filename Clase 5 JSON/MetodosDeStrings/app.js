//Un string es un objeto sobre el cual podemos consultar propiedades y ejecutar métodos:
//Un método es una función que pertenecen a un objeto, como el length


let mensaje = 'Gran día para practicar JS';

console.log(mensaje[0]); //Devuelve un caracter puntual, nombramos al string y dentro de los corchetes escribimos el índica a acceder:

console.log(mensaje.length); // Devuelve longitud de cadena de texto

console.log(mensaje.indexOf('día')); //Devuelve índice donde empieza la palabra, desde el índice cero

console.log(mensaje.slice(5, 8)); //Devuelve los caracteres entren estos índices

console.log(mensaje.trim()); //Por si el usuario agrega sin querer espacios antes o después del texto, así que elimina espacios (no intermedios)

console.log(mensaje.split(' ')); //Convierte al string en un array, cuya división de los índices es el valor que recibe (espacios en mi ejemplo)

console.log(mensaje.replace('JS', 'programación en general')); //Reemplaza una palabra por una que queramos

