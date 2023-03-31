def primeraLetra(lista):
    primerasLetras = []

    for palabra in lista:
        assert type(palabra) == str, f'{palabra}d no es str'
        assert  len(palabra) > 0, 'No se permiten str vacios'

        primerasLetras.append(palabra[0])

    return primerasLetras

print(primeraLetra(["pedro","sandre almiro",'']))