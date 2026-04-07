import random

# Se declarar e inicializan el arrgelo acorde al ejercicio
arreglo = [random.randint(1, 100) for _ in range(10)]

#Imprimimos el arreglo que acabamos de inicializar
print (arreglo)


#Ahora bien recorremos con el for
print ("Recorreremos el arreglo:")
for i in range(len(arreglo)):
    print ((f"Posición {i}: {arreglo[i]}"))

# Ahora lo hacemos con otro for
print(" \n Recorrido con un for diferente:")
for valor in arreglo:
    print(valor)

    # Cambiar todos los valores impares por cero
for i in range(len(arreglo)):
    if arreglo[i] % 2 != 0:
        arreglo[i] = 0

print("\n El arreglo queda así, después de cambiar impares por cero:")
print(arreglo)

print("Multiplicaremos todos los valores por su indice:")
for i in range(len(arreglo)):
    arreglo[i] = arreglo[i] * i

print("\n Arreglo después de multiplicar cada valor por su índice:")
print(arreglo)

# Ahora pedimos un valor y buscaremos
buscar = int(input("\nIngrese el valor que desea buscar: "))
encontrado = False

for i in range(len(arreglo)):
    if arreglo[i] == buscar:
        print(f"El valor {buscar} se encontró en la posición {i}.")
        encontrado = True
        break

if not encontrado:
    print(f"El valor {buscar} no se encontró en el arreglo.")