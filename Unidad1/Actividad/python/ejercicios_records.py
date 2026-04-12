from dataclasses import dataclass

# Declaramos
@dataclass
class Estudiante:
    nombre: str
    edad: int
    promedio: float

# Creo 3 instancias con datos de mis hermanos
estudiante1 = Estudiante("Neider", 27, 4.0)
estudiante2 = Estudiante("Valen", 22, 3.5)
estudiante3 = Estudiante("Roosevelt", 33, 4.4)

# Guardamos en una lista
estudiantes = [estudiante1, estudiante2, estudiante3]

# Recorremos
print("Listado de estudiantes de la Fundación UDEC:")
for estudiante in estudiantes:
    print(f"Nombre: {estudiante.nombre}, Edad: {estudiante.edad}, Promedio: {estudiante.promedio}")

# Modificamos un promedio
for estudiante in estudiantes:
    if estudiante.nombre == "Valen":
        estudiante.promedio = 4.0

print("\nLa nueva lista de estudiantes es:")
for estudiante in estudiantes:
    print(f"Nombre: {estudiante.nombre}, Edad: {estudiante.edad}, Promedio: {estudiante.promedio}")