'''Creamos una lista de 15 posiciones 0-14'''
my_list = list(range(15))
print(my_list)

'''Multiplicar por dos cada elementeo de la lista en una nueva lista'''
double = [i * 2 for i in my_list]
print(double)

'''Solo generar numeros pares apartir de mi lista'''
pares = [ i for i in my_list if i%2 == 0 ]
print(pares)