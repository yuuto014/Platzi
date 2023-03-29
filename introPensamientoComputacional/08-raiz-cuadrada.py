def enumeracion(objetivo):
    respuesta = 0

    while respuesta**2 < objetivo:
        respuesta += 1
    if respuesta**2 == objetivo:
        print(f'La raiz cuadrada de {objetivo} es {respuesta}')
    else:
        print(f'{objetivo} no tinene una raiz cuadrada exacta')

def aproximacion(objetivo):
    epsilon = 0.01
    paso = epsilon**2
    respuesta = 0

    while abs(respuesta**2 - objetivo) >= epsilon and respuesta <= objetivo:
        respuesta += paso
    if abs(respuesta**2 - objetivo) >= epsilon:
        print(f'No se encontró la raiz cuadrada de {objetivo}')
    else:
        print(f'La raiz cuadrada de {objetivo} es {respuesta}')

def binaria(objetivo):
    epsilon = 0.01                  
    bajo = 0.0                      
    alto = max(1.0, objetivo)       
    respuesta = (alto + bajo) / 2  

    while abs(respuesta**2 - objetivo) >= epsilon:
        if abs(respuesta**2 < objetivo):
            bajo = respuesta
        else:
            alto = respuesta
        respuesta = (alto + bajo) / 2 
    print(f'La raiz cuadrada de {objetivo} es {respuesta}')

def menu():
    print("\n************************************")
    numero = int(input('Escoja el numero entero '))
    print("\n************************************\n")

    print(f'Opciones para hallar raiz cuadrada \n (1) Enumeracion exhaustiva \n (2) Aproximacion de soluciones \n (3) Busqueda binaria')
    
    opcion = int(input('Elija una opcion: '))

    print("\n************************************")

    if(opcion == 1):
        enumeracion(numero)
    elif opcion == 2 :
        aproximacion(numero)
    elif opcion == 3 :
        binaria(numero)
    else :
        print(f'Opcion no valida')
    print("************************************")

menu()