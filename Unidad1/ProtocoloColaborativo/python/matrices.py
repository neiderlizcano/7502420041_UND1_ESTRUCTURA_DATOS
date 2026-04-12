#Declaramos e iniciamos con valores
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

#Se muestra matriz en tabla
print("Matriz del 1 al 9")
for fila in matriz:
    for valor in fila:
        print(valor, end="\t")
    print()

# Recorremos por columna
print("\nRecorrido")
for columna in range(len(matriz[0])):
    for fila in range(len(matriz)):
        print(matriz[fila][columna], end=" ")
    print()

#Suma
suma = 0
for fila in matriz:
    for valor in fila:
        suma += valor

print("\nLa suma de todos los elementos es:", suma)

#Movemos la fila 1 con la ultima
matriz[0], matriz[2] = matriz[2], matriz[0]

print("\nMatriz después de intercambiar la primera fila con la última:")
for fila in matriz:
    for valor in fila:
        print(valor, end="\t")
    print()
