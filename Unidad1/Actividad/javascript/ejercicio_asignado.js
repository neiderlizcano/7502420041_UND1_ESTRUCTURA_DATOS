const readline = require("readline");

// Objeto
class CajeroAutomatico {
    constructor(billetes) {
        this.billetes = billetes;
    }

    calcularSaldo() {
        let saldo = 0;
        for (let i = 0; i < this.billetes.length; i++) {
            saldo += this.billetes[i].denominacion * this.billetes[i].cantidad;
        }
        return saldo;
    }

    mostrarBilletes() {
        for (let i = 0; i < this.billetes.length; i++) {
            console.log("$" + this.billetes[i].denominacion + " -> " + this.billetes[i].cantidad + " billete(s)");
        }
    }

    depositar(denominacion, cantidad) {
        let depositoRealizado = false;

        for (let i = 0; i < this.billetes.length; i++) {
            if (this.billetes[i].denominacion === denominacion) {
                this.billetes[i].cantidad += cantidad;
                depositoRealizado = true;
                console.log("Deposito realizado correctamente.");
                break;
            }
        }

        if (!depositoRealizado) {
            console.log("El cajero no acepta esa clase de billete.");
        }
    }

    retirar(retiro) {
        let saldoActual = this.calcularSaldo();

        if (retiro > saldoActual) {
            console.log("No hay saldo suficiente en el cajero.");
        } else if (retiro % 10000 !== 0) {
            console.log("El monto debe ser multiplo de 10000.");
        } else {
            let entrega = new Array(this.billetes.length).fill(0);
            let montoRestante = retiro;

            for (let i = 0; i < this.billetes.length; i++) {
                let billetesNecesarios = Math.floor(montoRestante / this.billetes[i].denominacion);

                if (billetesNecesarios > this.billetes[i].cantidad) {
                    billetesNecesarios = this.billetes[i].cantidad;
                }

                entrega[i] = billetesNecesarios;
                montoRestante -= billetesNecesarios * this.billetes[i].denominacion;
            }

            if (montoRestante === 0) {
                for (let i = 0; i < this.billetes.length; i++) {
                    this.billetes[i].cantidad -= entrega[i];
                }

                console.log("Retiro realizado correctamente.");
                console.log("Billetes entregados:");

                for (let i = 0; i < entrega.length; i++) {
                    if (entrega[i] > 0) {
                        console.log(entrega[i] + " billete(s) de $" + this.billetes[i].denominacion);
                    }
                }
            } else {
                console.log("No es posible entregar ese monto con los billetes disponibles.");
            }
        }
    }
}

// Records de billetes
let billetes = [
    { denominacion: 100000, cantidad: 3000 },
    { denominacion: 50000, cantidad: 2500 },
    { denominacion: 20000, cantidad: 2000 },
    { denominacion: 10000, cantidad: 1000 }
];

let cajero = new CajeroAutomatico(billetes);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\nCajero Automatico Rapido");
    console.log("1. Consultar saldo");
    console.log("2. Realizar deposito");
    console.log("3. Retirar dinero");
    console.log("4. Mostrar billetes disponibles");
    console.log("5. Salir");

    rl.question("Seleccione una opcion: ", function(opcionTexto) {
        let opcion = parseInt(opcionTexto);

        switch (opcion) {
            case 1:
                console.log("Saldo disponible en el cajero: $" + cajero.calcularSaldo());
                mostrarMenu();
                break;

            case 2:
                console.log("\nLos billetes que el cajero acepta son:");
                for (let i = 0; i < cajero.billetes.length; i++) {
                    console.log("$" + cajero.billetes[i].denominacion);
                }

                rl.question("Ingrese el valor del billete a depositar: ", function(denominacionTexto) {
                    rl.question("Ingrese la cantidad de billetes a depositar: ", function(cantidadTexto) {
                        let depositoDenominacion = parseInt(denominacionTexto);
                        let depositoCantidad = parseInt(cantidadTexto);

                        cajero.depositar(depositoDenominacion, depositoCantidad);
                        mostrarMenu();
                    });
                });
                break;

            case 3:
                rl.question("\nIngrese el monto a retirar: ", function(retiroTexto) {
                    let retiro = parseInt(retiroTexto);
                    cajero.retirar(retiro);
                    mostrarMenu();
                });
                break;

            case 4:
                console.log("\nBilletes disponibles en el cajero:");
                cajero.mostrarBilletes();
                mostrarMenu();
                break;

            case 5:
                console.log("Saliendo del sistema...");
                rl.close();
                break;

            default:
                console.log("Opcion no valida.");
                mostrarMenu();
        }
    });
}

mostrarMenu();