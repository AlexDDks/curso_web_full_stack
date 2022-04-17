//Ciclo for es una condicional que tiene la estructura que se muestra en la parte inferior (3 partes fundamentales)__
//Es muy importante revisar que esta condición se cumpla en algún punto para no tener un bucle infinito

//variable inicializadora let i=0; define el valor donde se comienza a iterar
// condición a evaluar i<x; define cuántas iteraciones hace el ciclo y si la sentencia e cumple, ejecuta el código, si es false, se sale de la iteración__
//(debe haber un false en algún punto, sino será un loop infinito)
// modificador de la variable i, ++, incrementa o decrementa la variable

// for (let i = 0; i < 10; i++) {
//     console.log('El valor de i es igual a ' + i)
// }

console.log('La tabla del 7 hasta el millón es: ');
for (let i = 1; i <= 1000000 / 7; i++) {
    console.log(i * 7);
}