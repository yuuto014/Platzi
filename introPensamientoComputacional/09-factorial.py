def factorial(n):
	r'''Calcula el factorial de n.
	n int > 0 
	return n!
	'''
	print(f'{n}')
	if n == 1 :
		return 1 
	return n * factorial(n-1)

n = int(input('Escribe el entero a sacar factorial: '))

print(factorial(n))