package protocoloindividual;

public class EjemplosMatrices {

    public static void main(String[] args) {

        //Declaramas e iniciamos la atriz 3x3
        int[][] matriz = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Se imprime por consola
        System.out.println();
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + "\t");
            }
            System.out.println();
        }

        // Recorremos la matriz
        System.out.println();
        System.out.println();
        for (int j = 0; j < matriz[0].length; j++) {
            for (int i = 0; i < matriz.length; i++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println();
        System.out.println();

        //Sumar todo
        int suma = 0;
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                suma += matriz[i][j];
            }
        }
        System.out.println("\nLa suma de todo es: " + suma);

        System.out.println("");

        //Intercambio de la primera fila con la última
        int[] temporal = matriz[0];
        matriz[0] = matriz[2];
        matriz[2] = temporal;

        //mostramos como queda:
        System.out.println("\nLa nueva matriz es:");
        System.out.println("");
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + "\t");
            }
            System.out.println();
        }
    }
}
    

