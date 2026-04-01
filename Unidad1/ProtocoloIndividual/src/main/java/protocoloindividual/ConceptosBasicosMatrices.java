package protocoloindividual;

public class ConceptosBasicosMatrices {

    public static void main(String[] args) {
        //Declaramos  e inicialización de la matriz
        int[][] matriz = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        for (int j = 0; j < matriz[0].length; j++) {
            for (int i = 0; i < matriz.length; i++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }

    int[][] matrizIrregular = {
        {9, 6, 5},
        {5, 3},
        {8, 1, 1, 0}
    };

}
