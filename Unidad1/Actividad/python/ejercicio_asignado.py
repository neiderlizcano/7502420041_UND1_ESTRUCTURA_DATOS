from dataclasses import dataclass

# Record
@dataclass
class Billete:
    denominacion: int
    cantidad: int

# Objeto
class CajeroAutomatico:
    def __init__(self, billetes):
        self.billetes = billetes

    def calcularSaldo(self):
        saldo = 0
        for billete in self.billetes:
            saldo += billete.denominacion * billete.cantidad
        return saldo

    def mostrarBilletes(self):
        for billete in self.billetes:
            print(f"${billete.denominacion} -> {billete.cantidad} billete(s)")

    def depositar(self, denominacion, cantidad):
        depositoRealizado = False

        for billete in self.billetes:
            if billete.denominacion == denominacion:
                billete.cantidad += cantidad
                depositoRealizado = True
                print("Deposito realizado correctamente.")
                break

        if not depositoRealizado:
            print("El cajero no acepta esa clase de billete.")

    def retirar(self, retiro):
        saldoActual = self.calcularSaldo()

        if retiro > saldoActual:
            print("No hay saldo suficiente en el cajero.")
        elif retiro % 10000 != 0:
            print("El monto debe ser multiplo de 10000.")
        else:
            entrega = [0] * len(self.billetes)
            montoRestante = retiro

            for i in range(len(self.billetes)):
                billetesNecesarios = montoRestante // self.billetes[i].denominacion

                if billetesNecesarios > self.billetes[i].cantidad:
                    billetesNecesarios = self.billetes[i].cantidad

                entrega[i] = billetesNecesarios
                montoRestante -= billetesNecesarios * self.billetes[i].denominacion

            if montoRestante == 0:
                for i in range(len(self.billetes)):
                    self.billetes[i].cantidad -= entrega[i]

                print("Retiro realizado correctamente.")
                print("Billetes entregados:")

                for i in range(len(entrega)):
                    if entrega[i] > 0:
                        print(f"{entrega[i]} billete(s) de ${self.billetes[i].denominacion}")
            else:
                print("No es posible entregar ese monto con los billetes disponibles.")


# Inicializamos los billetes
billetes = [
    Billete(100000, 3000),
    Billete(50000, 2500),
    Billete(20000, 2000),
    Billete(10000, 1000)
]

cajero = CajeroAutomatico(billetes)

#Menu de opciones
opcion = 0

while opcion != 5:
    print("\nCajero Automatico Rapido")
    print("1. Consultar saldo")
    print("2. Realizar deposito")
    print("3. Retirar dinero")
    print("4. Mostrar billetes disponibles")
    print("5. Salir")

    opcion = int(input("Seleccione una opcion: "))

    if opcion == 1:
        saldo = cajero.calcularSaldo()
        print(f"Saldo disponible en el cajero: ${saldo}")

    elif opcion == 2:
        print("\nLos billetes que el cajero acepta son:")
        for billete in cajero.billetes:
            print(f"${billete.denominacion}")

        depositoDenominacion = int(input("Ingrese el valor del billete a depositar: "))
        depositoCantidad = int(input("Ingrese la cantidad de billetes a depositar: "))

        cajero.depositar(depositoDenominacion, depositoCantidad)

    elif opcion == 3:
        retiro = int(input("\nIngrese el monto a retirar: "))
        cajero.retirar(retiro)

    elif opcion == 4:
        print("\nBilletes disponibles en el cajero:")
        cajero.mostrarBilletes()

    elif opcion == 5:
        print("Saliendo del sistema...")

    else:
        print("Opcion no valida.")