#Crear lista 
my_list = [1,2,3]
print(my_list)

#agregar un valor en la ultima posicion
my_list.append(5)
print(my_list)

#Eliminar valor en la ultima posicion 
my_list.pop()
print(my_list)

#iterar una lista

for element in my_list:
    print(element)

#duplicar una lista (Se modifican ambas listas)
a = [1,2,3]
b = a
print(a)
print(b)
a.pop()
print(a)
print(b)

#La forma correcta de clonar una lista 
c  = list(a)
print(a)
print(c)
a.append(3)
print(a)
print(c)

d = a[::]
print(a)
print(d)
a.append(4)
print(a)
print(d)