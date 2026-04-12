// Declaramos los records
let estudiante1 = { nombre: "Neider", edad: 27, promedio: 4.0 };
let estudiante2 = { nombre: "Valen", edad: 22, promedio: 3.5 };
let estudiante3 = { nombre: "Roosevelt", edad: 33, promedio: 4.4 };

// Guardamos en un arreglo
let estudiantes = [estudiante1, estudiante2, estudiante3];

// Recorremos
console.log("Listado de estudiantes de la Fundación UDEC:");
for (let i = 0; i < estudiantes.length; i++) {
    console.log(
        "Nombre: " + estudiantes[i].nombre +
        ", Edad: " + estudiantes[i].edad +
        ", Promedio: " + estudiantes[i].promedio
    );
}

// Modificamos el promedio, ahora usamos al estudiante1
for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nombre === "Neider") {
        estudiantes[i].promedio = 4.5;
    }
}

console.log("\nLa nueva lista de estudiantes es:");
for (let i = 0; i < estudiantes.length; i++) {
    console.log(
        "Nombre: " + estudiantes[i].nombre +
        ", Edad: " + estudiantes[i].edad +
        ", Promedio: " + estudiantes[i].promedio
    );
}