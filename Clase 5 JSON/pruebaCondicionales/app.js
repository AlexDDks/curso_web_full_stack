// //IF

// let dia = 'nublado'

// if (dia == 'soleado' || dia == 'perfecto') {
//     console.log('Es un excelente día para salir')
// }
// else if (dia == 'nublado') {
//     console.log('no importa qué día sea, está feo para salir');
// }
// else {
//     console.log('No encontré ninguna condición');
// }

// //IF TERNARIO

// let frutas = 'no maduras'
// let resFrutas = frutas == 'maduras' ? 'Cómpralas' : 'Déjalas, ve a otra frutería'
// console.log(resFrutas);

// //WHILE
// let x = 0;
// while (x <= 10) {
//     console.log(x * 10);
//     x++
// }

// //FOR

// for (let y = 0; y <= 10; y++) {
//     console.log(y * 10);
// }

//SWITCH

let colorFruta = 'amarilla'
switch (colorFruta) {
    case 'verde':
        console.log('La fruta aún está verde');
        break

    case 'amarilla':
        console.log('A la fruta le falta un poquito más');
        break

    case 'roja':
        console.log('La fruta ya está lista para cortar');
        break

    default:
        console.log('No sabemos la madurez de la fruta');
}
