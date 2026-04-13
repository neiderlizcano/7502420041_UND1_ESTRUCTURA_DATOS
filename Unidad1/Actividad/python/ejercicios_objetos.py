class Estudiante:
    def __init__(self, nombre, edad, promedio):
        self.nombre = nombre
        self.edad = edad
        self.promedio = promedio

    def mostrarInfo(self):
        print(f"Nombre: {self.nombre}, Edad: {self.edad}, Promedio: {self.promedio}")

    def setPromedio(self, nuevo_promedio):
        self.promedio = nuevo_promedio


# 3 instancias
estudiante1 = Estudiante("Neider", 27, 4.0)
estudiante2 = Estudiante("Valen", 22, 3.5)
estudiante3 = Estudiante("Roosevelt", 33, 4.4)

# Guardarlas en una lista
estudiantes = [estudiante1, estudiante2, estudiante3]

# Recorrer con mostrarInfo
print("Listado de estudiantes de la Fundación UDEC:")
for estudiante in estudiantes:
    estudiante.mostrarInfo()

# Modificar el promedio de Neider
for estudiante in estudiantes:
    if estudiante.nombre == "Neider":
        estudiante.setPromedio(4.5)

print("\nLa nueva lista de estudiantes es:")
for estudiante in estudiantes:
    estudiante.mostrarInfo()