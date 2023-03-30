'''Creamos el diccionario de una familia'''
familia={"Juan":12, "Andres":15, "Ana":8, "Maria":11}
print(familia)
'''Le sumamos 10 años a la edad y les agregamos el apellido'''
tenYears={k+" Rodriguez":v+10 for (k,v) in familia.items()}
print(tenYears) 