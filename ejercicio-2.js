/* Tienes un arreglo con 20 elementos (enteros en el rango de 1 a 9). Escribe un
programa en el lenguaje preferido que imprima el número que tiene más
ocurrencias seguidas en arreglo y también imprimir la cantidad de veces que
aparece en la secuencia.
El programa debe analizar el arreglo de derecha a izquierda para que en caso de
que dos números cumplan la condición el que aparece por primera vez sea el que
se imprima.
La salida de los datos para el arreglo el ejemplo [1,2,2,5,4,6,7,8,8,8] sería la siguiente:
El número más repetido de forma seguida es el 8, se repitió 3 veces.
En el ejemplo, la secuencia más larga la tiene el número 8 con una secuencia
de tres ochos seguidos. */

let arreglo = [1, 2, 2, 5, 4, 6, 7, 7, 8, 8, 8, 2];
let dict = {}
let numeroMasRepetido = arreglo[arreglo.length - 1];
let contadorMasRepetido = 1;

arreglo.map(val => {
    if (!dict[val]) {
        dict[val] = 1
    } else {
        dict[val]++
    }

    if (dict[val] > contadorMasRepetido) {
        numeroMasRepetido = val;
        contadorMasRepetido = dict[val];
    }

})
console.log(`El número más repetido de forma seguida es el ${numeroMasRepetido}, se repitió ${contadorMasRepetido} veces.`);

console.log(dict)
