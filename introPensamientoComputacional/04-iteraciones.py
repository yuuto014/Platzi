#reloj
import time
#contador de 2 minutos 

minuto = 0
while minuto< 2:
    segundo = 0
    while segundo < 60:
        print(f'{minuto}:{segundo}')
        time.sleep(1)
        segundo += 1
    minuto +=1
