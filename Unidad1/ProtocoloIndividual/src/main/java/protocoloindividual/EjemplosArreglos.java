package protocoloindividual;

import java.util.Random;
import java.util.Scanner;

public class EjemplosArreglos {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        //Declaración y creación
        int[] numeros = new int[10];

        System.out.println("");

        // Inicialización con valores aleatorios 
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = random.nextInt(100) + 1;
        }
        System.out.println("");
        System.out.println("FOR");

        //Hacemos el reocrrido con el for
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Posición " + i + ": " + numeros[i]);
        }
        System.out.println("");
        //ahora con for -each
        System.out.println("FOR-EACH");
        for (int numero : numeros) {
            System.out.println(numero);
        }
        System.out.println("");
        System.out.println("Cambiaremos los valores impares por cero");
        System.out.println("");

        for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 != 0) {
                numeros[i] = 0;
            }
        }
        System.out.println("");
        //Ahora el arreglo ha cambiado y lo imprimimos por consola
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Posición " + i + ": " + numeros[i]);
        }

        //Procedo a multiplicar todo por su indice
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = numeros[i] * i;
        }
        System.out.println("");
        //Usamos el scanner para solicitar y realizar busqueda

        System.out.println("Ingresa el valor que quieres bucar en el arreglo");
        int valorBuscado = scanner.nextInt();

        int posicionEncontrada = -1;

        for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] == valorBuscado) {
                posicionEncontrada = i;
                break;
            }
        }

        if (posicionEncontrada != -1) {
            System.out.println("El valor " + valorBuscado + " fue encontrado en la posición " + posicionEncontrada);
        } else {
            System.out.println("El valor " + valorBuscado + " no se encontró en el arreglo.");
        }

        scanner.close();
    }
}


