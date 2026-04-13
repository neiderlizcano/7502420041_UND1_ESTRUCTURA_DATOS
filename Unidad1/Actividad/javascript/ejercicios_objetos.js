class Estudiante {
    constructor(nombre, edad, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }

    mostrarInfo() {
        console.log("Nombre: " + this.nombre + ", Edad: " + this.edad + ", Promedio: " + this.promedio);
    }

    setPromedio(nuevoPromedio) {
        this.promedio = nuevoPromedio;
    }
}

// 3 instancias
let estudiante1 = new Estudiante("Neider", 27, 4.0);
let estudiante2 = new Estudiante("Valen", 22, 3.5);
let estudiante3 = new Estudiante("Roosevelt", 33, 4.4);

// Guardarlas en un arreglo
let estudiantes = [estudiante1, estudiante2, estudiante3];

// Recorrer con mostrarInfo
console.log("Listado de estudiantes de la Fundación UDEC:");
for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].mostrarInfo();
}

// Modificar el promedio de Neider mediante un método
for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nombre === "Neider") {
        estudiantes[i].setPromedio(4.5);
    }
}

console.log("\nLa nueva lista de estudiantes es:");
for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].mostrarInfo();
}