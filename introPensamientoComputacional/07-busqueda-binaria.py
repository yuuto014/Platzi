objetivo = int(input("Escoge un entero: "))

epsilon = 0.01                  # Definimos un margen de error.

bajo = 0.0                      # Inicializamos la parte baja de nuestra busqueda como 0
alto = max(1.0, objetivo)       # Entre el numero que ingresamos y 1 vamos a tomar el mayor valor.
respuesta = (alto + bajo) / 2   # Definimos la mitad entre bajo y alto.


while abs(respuesta**2 - objetivo) >= epsilon:
    if abs(respuesta**2 < objetivo):
        bajo = respuesta
    else:
        alto = respuesta
    respuesta = (alto + bajo) / 2 
print(f'La raiz cuadrada de {objetivo} es {respuesta}')
