// Declaramos y inicializamosción el arreglo de 10 enteros con valores aleatorios
let arreglo = [];

for (let i = 0; i < 10; i++) {
    arreglo.push(Math.floor(Math.random() * 100) + 1);
}

//Mostramos como quedo el arreglo
console.log("El arreglo es:");
console.log(arreglo);

//Recorremos con for
console.log("\n Este es el recorrido con for:");
for (let i = 0; i < arreglo.length; i++) {
    console.log("Posición " + i + ": " + arreglo[i]);
}

//Recorremos con for-each o equivalente
console.log("\n Este es el recorrido con forEach:");
arreglo.forEach(function(valor) {
    console.log(valor);
});

//Cambiamos todos los valores impares por cero
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 !== 0) {
        arreglo[i] = 0;
    }
}

console.log("\n Ahora el arreglo cambió de impares por cero:");
console.log(arreglo);

//Multiplicamos todos los valores por su índice
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = arreglo[i] * i;
}

console.log("\n El arreglo queda asi al multiplicarlo por su indice:");
console.log(arreglo);

// Búsqueda 
//Busco con este número
let buscar = 100;

let encontrado = false;

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === buscar) {
        console.log("El valor " + buscar + " se encontró en la posición " + i);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("El valor " + buscar + " no se encontró en el arreglo.");
}