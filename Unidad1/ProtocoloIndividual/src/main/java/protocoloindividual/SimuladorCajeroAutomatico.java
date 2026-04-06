package protocoloindividual;

import java.util.Scanner;

public class SimuladorCajeroAutomatico {

    public static void main(String[] args) {
        Scanner scaner = new Scanner(System.in);

        // Declaramos e inicializamos en los arreglos los valores
        int[] denominaciones = {100000, 50000, 20000, 10000};
        int[] cantidades = {3000, 2500, 2000, 1000};

        int opcion;
        //Realizamos un estructura de control
        do {
            System.out.println("\n Cajero Automatico Rapido");
            System.out.println("1. Consultar saldo");
            System.out.println("2. Realizar deposito");
            System.out.println("3. Retirar dinero");
            System.out.println("4. Mostrar billetes disponibles");
            System.out.println("5. Salir");
            System.out.print("Seleccione una opcion: ");
            opcion = scaner.nextInt();

            switch (opcion) {
                //A traves de la opccion escogida se realiza algo
                case 1:
                    int saldo = calcularSaldo(denominaciones, cantidades);
                    System.out.println("Saldo disponible en el cajero: $" + saldo);
                    break;

                case 2:
                    System.out.println("\nLos billetes que el cajero acepta son:");
                    for (int i = 0; i < denominaciones.length; i++) {
                        System.out.println("$" + denominaciones[i]);
                    }

                    System.out.print("Ingrese el valor del billete a depositar: ");
                    int depositoDenominacion = scaner.nextInt();

                    System.out.print("Ingrese la cantidad de billetes a depositar: ");
                    int depositoCantidad = scaner.nextInt();

                    boolean depositoRealizado = false;

                    for (int i = 0; i < denominaciones.length; i++) {
                        if (denominaciones[i] == depositoDenominacion) {
                            cantidades[i] += depositoCantidad;
                            depositoRealizado = true;
                            System.out.println("Deposito realizado correctamente.");
                            break;
                        }
                    }

                    if (!depositoRealizado) {
                        System.out.println("El cajero no acepta esa clase de billete.");
                    }
                    break;

                case 3:
                    System.out.print("\nIngrese el monto a retirar: ");
                    int retiro = scaner.nextInt();

                    int saldoActual = calcularSaldo(denominaciones, cantidades);

                    if (retiro > saldoActual) {
                        System.out.println("No hay saldo suficiente en el cajero.");
                    } else if (retiro % 10000 != 0) {
                        System.out.println("El monto debe ser multiplo de 10000.");
                    } else {
                        int[] entrega = new int[denominaciones.length];
                        int montoRestante = retiro;

                        for (int i = 0; i < denominaciones.length; i++) {
                            int billetesNecesarios = montoRestante / denominaciones[i];

                            if (billetesNecesarios > cantidades[i]) {
                                billetesNecesarios = cantidades[i];
                            }

                            entrega[i] = billetesNecesarios;
                            montoRestante -= billetesNecesarios * denominaciones[i];
                        }

                        if (montoRestante == 0) {
                            for (int i = 0; i < cantidades.length; i++) {
                                cantidades[i] -= entrega[i];
                            }

                            System.out.println("Retiro realizado correctamente.");
                            System.out.println("Billetes entregados:");

                            for (int i = 0; i < entrega.length; i++) {
                                if (entrega[i] > 0) {
                                    System.out.println(entrega[i] + " billete(s) de $" + denominaciones[i]);
                                }
                            }
                        } else {
                            System.out.println("No es posible entregar ese monto con los billetes disponibles.");
                        }
                    }
                    break;

                case 4:
                    System.out.println("\nBilletes disponibles en el cajero:");
                    mostrarBilletes(denominaciones, cantidades);
                    break;

                case 5:
                    System.out.println("Saliendo del sistema...");
                    break;

                default:
                    System.out.println("Opcion no valida.");
            }

        } while (opcion != 5);

        scaner.close();
    }

    public static int calcularSaldo(int[] denominaciones, int[] cantidades) {
        int saldo = 0;
        for (int i = 0; i < denominaciones.length; i++) {
            saldo += denominaciones[i] * cantidades[i];
        }
        return saldo;
    }

    public static void mostrarBilletes(int[] denominaciones, int[] cantidades) {
        for (int i = 0; i < denominaciones.length; i++) {
            System.out.println("$" + denominaciones[i] + " -> " + cantidades[i] + " billete(s)");
        }
    }
}
