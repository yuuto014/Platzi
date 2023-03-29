objetivo = int(input("Escoge un entero: "))

epsilon = 0.01 # Definimos un margen de error.
paso = epsilon**2
respuesta = 0

while abs(respuesta**2 - objetivo) >= epsilon and respuesta <= objetivo:
    respuesta += paso
if abs(respuesta**2 - objetivo) >= epsilon:
    print(f'No se encontró la raiz cuadrada de {objetivo}')
else:
    print(f'La raiz cuadrada de {objetivo} es {respuesta}')