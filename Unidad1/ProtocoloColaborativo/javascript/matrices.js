//Declaramos e iniciamos con valores
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Se muestra matriz en tabla
console.log("Matriz del 1 al 9");
for (let i = 0; i < matriz.length; i++) {
    let filaTexto = "";
    for (let j = 0; j < matriz[i].length; j++) {
        filaTexto += matriz[i][j] + "\t";
    }
    console.log(filaTexto);
}

//Recorremos por columna
console.log("\nRecorrido:");
for (let j = 0; j < matriz[0].length; j++) {
    let columnaTexto = "";
    for (let i = 0; i < matriz.length; i++) {
        columnaTexto += matriz[i][j] + " ";
    }
    console.log(columnaTexto);
}

//Suma
let suma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j];
    }
}

console.log("\nLa suma de todos los elementos es: " + suma);

//Movemos la fila 1 con la ultima
let temporal = matriz[0];
matriz[0] = matriz[2];
matriz[2] = temporal;

console.log("\nMatriz después de intercambiar la primera fila con la última:");
for (let i = 0; i < matriz.length; i++) {
    let filaTexto = "";
    for (let j = 0; j < matriz[i].length; j++) {
        filaTexto += matriz[i][j] + "\t";
    }
    console.log(filaTexto);
}

