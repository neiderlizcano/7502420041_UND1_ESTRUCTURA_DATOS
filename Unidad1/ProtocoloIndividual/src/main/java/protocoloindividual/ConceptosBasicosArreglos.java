package protocoloindividual;

public class ConceptosBasicosArreglos {

    public static void main(String[] args) {

        //Declaramos y tambien iniciamos el arreglo
        String[] nombres = {"Valentina", "Maria", "Eloina"};

        //Con este ciclo se recorre y se muestran loe elementos en el arreglo 
        for (int i = 0; i < nombres.length; i++) {
            System.out.println(nombres[i]);
        }

        // Accederé a una posición dentro de el
        System.out.println("");
        System.out.println("El tercer nombre en el arreglo es " + nombres[2]);
        System.out.println("");

        // Ahora bien modificamos un valor dentro del arreglo
        nombres[2] = "Alirio";

        //Finalmente mostramos el arreglo modificado:
        for (int i = 0; i < nombres.length; i++) {
            System.out.println(nombres[i]);
        }

    }
}
