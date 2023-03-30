#creacion de diccionario 
my_dict = {
    'Juan': 26,
    'Natatia': 22,
    'Andres': 24
}
#buscar el valor de un dato 
print(my_dict["Juan"])

#Buscar un valor y generar una salida si no exite
print(my_dict.get("pedro","No existe la busqueda"))

#Re asignar un valor 
my_dict['Andres'] = 23
print(my_dict)

#agreegar un dato 
my_dict["Pedro"] = 31
print(my_dict)

#Eliminar un dato 

del my_dict['Andres']
print(my_dict)

#iterar en todas las keys 
for nombres in my_dict.keys():
    print(nombres)

#iterar en todos los valores 
for edad in my_dict.values():
    print(edad)

#itera en cada dato 

for llave, valor in my_dict.items():
    print(llave,valor)

#Saber si existe un dato en el diccionario 
existe = 'Juan' in my_dict
print(existe)

existe = 'Andres' in my_dict
print(existe)