import unittest

def esMayorDeEdad(edad):
    if edad >= 18:
        return True
    else:
        return False

class PruebaDeCristalTest(unittest.TestCase):
    
    def test_es_mayor(self):
        edad = 20

        resultado = esMayorDeEdad(edad)
        self.assertEqual(resultado,True)

    def test_es_menor(self):
        edad = 15

        resultado = esMayorDeEdad(edad)
        self.assertEqual(resultado, False)


if __name__ == "__main__":
    unittest.main()