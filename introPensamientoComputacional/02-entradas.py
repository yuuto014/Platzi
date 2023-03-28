#Utilizamos input para ingresar un nombre
nombre = input('Cual es tu nombre: ')      

#Vemos que contiene nuestra variable nombre
print(nombre)

#Imprimimos una cadena concatenando una oracion con nuestra variable.
print(f'Tu nombre es {nombre}') 															

#Utilizamos input para ingresar un numero
numero = input('Escribe un numero: ')

#Vemos que contiene nuestra variable numero
print(numero)                                      

#Vemos el tipo de dato que es numero y vemos que es un str
print(type(numero))                           \

#Pero si definimos previamente el input como int
numero = int(input('Escribe un numero: '))  

#Nuestra variable numero sera de tipo int
print(type(numero))