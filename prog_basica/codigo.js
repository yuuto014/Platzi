 // 1 es piedra, 2 es papel y 3 es tijera

 function aleatorio(min, max){
    return Math.floor(Math.random() * ( max - min + 1 ) + min)
}

function elegir(jugada){
    let resultado = ""
    if( jugada == 1 ){
        resultado = "Piedra 🪨"
    }else if(jugada == 2){
        resultado = "Papel 🧻"
    }else if(jugada == 3){
        resultado = "Tijera ✂️"
    }else {
        resultado = "Mal elegido "
    }
    return resultado
}

function mensaje(p1,p2){
    alert(p1+" vs "+p2)
}

function conbate(tu,pc){

    if(pc == tu){   
        // mensaje(jugador1,jugador2);
        return 0;
    }else if (tu == 1 && pc == 3){
        // alert("🪨 vs ✂️")
        return 1;
    }else if (tu == 2 && pc == 1 ){
        // alert("🧻 vs 🪨")
        return 1
    }else if (tu == 3 && pc == 2){
        // alert("✂️ vs 🧻")
        return 1
    }else{
        // mensaje(jugador1,jugador2);
        return 2
    }
}
let tu = 0 
let pc = 0
let triunfos = 0
let perdidas = 0

while( triunfos < 3 && perdidas < 3){

    pc = aleatorio(1,3)
    tu = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

    //combate

    alert("PC elige:" + elegir(pc))
    alert("Tu eliges:" + elegir(tu))
    // jugador1 = elegir(tu)
    // jugador2 = elegir(pc)

    let ganador = conbate(tu,pc);
    if (ganador == 1){
        triunfos +=1
        alert("GANASTE")
    }else if(ganador == 2){
        alert("PERDISTE")
        perdidas +=1
    }else{
        alert("EMPATE")
    }
    
}

alert("Ganaste "+ triunfos +" veces. Perdiste "+ perdidas+ " veces.")