
const sectionPartida =  document.getElementById("partida")
const botonMascotaJugador = document.getElementById("boton-mascota")

const botonRiniciar = document.getElementById("boton-reiniciar")

const spanMascotaJugador = document.getElementById("titulo-mascota-jugador")
const sectionReinicar =  document.getElementById("reiniciar")
const sectionSeleccionMascota =  document.getElementById("seleccionar-mascota")

const spanMascotaRival = document.getElementById("titulo-mascota-rival")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasRival = document.getElementById("vidas-rival")

const sectionMensajes = document.getElementById("parrafo-resultado")
// const divResultado = document.getElementById("parrafo-resultado")
const divAtaqueJugador = document.getElementById("ataque-jugador")
const divAtaqueRival = document.getElementById("ataque-rival")

const sectionsubtitle =  document.getElementById("subtitle")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let idJugador = null
let idRival = null

let botones = []

let mokepones = []

let mokeponesRivales = []

let opcionDeMokepones
const contenedorMascotas = document.getElementById("mascotas")

let opcionDeAtaques
const contenedorAtaques = document.getElementById("botones-ataque")

let inputHipodoge 
let inputCapipepo
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma
let inputPydos 

let mokeponRival 
let mokeponJugador

let ataqueJugador = []
let ataqueRival = []
let victoriasJugador = 0
let victoriasRival = 0

// const ruta = "localhost:8080"
const ruta = "192.168.1.8:8080"

let lienzo = mapa.getContext("2d")
let intervalo 
let fondoMapa = new Image()
fondoMapa.src = "https://static.platzi.com/media/user_upload/mokemap-ca51ea18-7ac8-492f-be96-6181d766a99d.jpg"

const anchoMaxMapa = 350

let anchoDelMapa = window.innerWidth - 20

if(anchoDelMapa > anchoMaxMapa){
    anchoDelMapa = anchoMaxMapa - 80
}

let alturaDelMapa = anchoDelMapa*600 /800


mapa.width = anchoDelMapa
mapa.height =alturaDelMapa

//creacion y configuracion de mokepones

class Mokepon{
    constructor(nombre, imagen, altImage, avatar, vida, tipo){
        this.nombre = nombre
        this.imagen = imagen
        this.altImage = altImage
        this.avatar = avatar
        this.vida = vida
        this.tipo = tipo

        this.idJugador = ""
        this.idRival = ""

        this.ancho = 40//(mapa.width)/10
        this.alto = 40//(mapa.width)/10

        this.x = aleatorio(0,mapa.width -this.ancho)
        this.y = aleatorio(0,mapa.height -this.alto)
        this.ataques = []
        

        this.mapaFoto = new Image()
        this.mapaFoto.src = avatar

        this.velocidadX = 0
        this.velocidadY = 0
    }

     pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
            )
        }
}

let hipodoge = new Mokepon("Hipodoge","https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png?raw=true","https://static.platzi.com/media/user_upload/hipodoge-76597a8f-782f-4beb-b9ab-53191d217f12.jpg","https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/hipodoge.png",3,"💧")

let capipepo = new Mokepon("Capipepo","https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png?raw=true","https://static.platzi.com/media/user_upload/capipepo-26b57f58-e390-416a-b126-0bcf8c8ef477.jpg","https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/capipepo.png",3,"🌱")

let ratigueya = new Mokepon("Ratigueya","https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png?raw=true","https://static.platzi.com/media/user_upload/ratigueya-37a7cdfe-6921-467c-92f6-44bb7ae506e7.jpg","https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/ratigueya.png",3,"🔥")

let langostelvis = new Mokepon("Langostelvis","https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_langostelvis_attack.png?raw=true","https://static.platzi.com/media/user_upload/langostelvis-73e35035-de30-4f9c-9802-e31a26110bd0.jpg","https://imgur.com/iaJhdyY.png",3,"💧🔥")

let tucapalma = new Mokepon("Tucapalma","https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_tucapalma_attack.png?raw=true","https://static.platzi.com/media/user_upload/tucapalma-3263a05e-b205-49a0-943d-19590a3949e1.jpg","https://i.imgur.com/y3s277X.png",3,"💧🌱")

let pydos = new Mokepon("Pydos","https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_pydos_attack.png?raw=true","https://static.platzi.com/media/user_upload/pydos-6e458237-73df-40fb-be7c-2d4b477be360.jpg","https://imgur.com/LWkctTb.png",3,"🌱🔥")




// let hipodogeRival = new Mokepon("Hipodoge","https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png?raw=true","https://static.platzi.com/media/user_upload/hipodoge-76597a8f-782f-4beb-b9ab-53191d217f12.jpg","https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/hipodoge.png",3,"💧")
// let capipepoRival = new Mokepon("Capipepo","https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png?raw=true","https://static.platzi.com/media/user_upload/capipepo-26b57f58-e390-416a-b126-0bcf8c8ef477.jpg","https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/capipepo.png",3,"🌱")
// let ratigueyaRival = new Mokepon("Ratigueya","https://github.com/platzi/curso-programacion-basica/blob/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png?raw=true","https://static.platzi.com/media/user_upload/ratigueya-37a7cdfe-6921-467c-92f6-44bb7ae506e7.jpg","https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-65-clases-methods/programar/mokepon/assets/ratigueya.png",3,"🔥")


mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)

hipodoge.ataques.push(
    {nombre: "Agua 💧",id : "boton-agua"},
    {nombre: "Agua 💧",id : "boton-agua"},
    {nombre: "Agua 💧",id : "boton-agua"},
    {nombre: "Fuego 🔥",id : "boton-fuego"},
    {nombre: "Tierra 🌱",id : "boton-tierra"}
)

capipepo.ataques.push(
    {nombre: "Tierra 🌱",id : "boton-tierra"},
    {nombre: "Tierra 🌱",id : "boton-tierra"},
    {nombre: "Tierra 🌱",id : "boton-tierra"},
    {nombre: "Agua 💧",id : "boton-agua"},
    {nombre: "Fuego 🔥",id : "boton-fuego"}
    
)

ratigueya.ataques.push(
    {nombre: "Fuego 🔥",id : "boton-fuego"},
    {nombre: "Fuego 🔥",id : "boton-fuego"},
    {nombre: "Fuego 🔥",id : "boton-fuego"},
    {nombre: "Agua 💧",id : "boton-agua"},
    {nombre: "Tierra 🌱",id : "boton-tierra"}
)

langostelvis.ataques.push(
    {nombre: "Agua 💧",id : "boton-agua"},
    {nombre: "Agua 💧",id : "boton-agua"},
    {nombre: "Fuego 🔥",id : "boton-fuego"},
    {nombre: "Fuego 🔥",id : "boton-fuego"},
    {nombre: "Tierra 🌱",id : "boton-tierra"}
)

tucapalma.ataques.push(
    {nombre: "Agua 💧",id : "boton-agua"},
    {nombre: "Agua 💧",id : "boton-agua"},
    {nombre: "Tierra 🌱",id : "boton-tierra"},
    {nombre: "Tierra 🌱",id : "boton-tierra"},
    {nombre: "Fuego 🔥",id : "boton-fuego"}
)

pydos.ataques.push(
    {nombre: "Fuego 🔥",id : "boton-fuego"},
    {nombre: "Fuego 🔥",id : "boton-fuego"},
    {nombre: "Tierra 🌱",id : "boton-tierra"},
    {nombre: "Tierra 🌱",id : "boton-tierra"},
    {nombre: "Agua 💧",id : "boton-agua"}
)

//programando el juego...


function iniciarJuego(){
     
    sectionPartida.style.display = "none"
    sectionVerMapa.style.display = "none"

    mokepones.forEach((mokepon) =>{
        opcionDeMokepones = `
        <input type="radio" id=${mokepon.nombre} name="mascota" />
            <label id="mokepon" for=${mokepon.nombre} >
                <p>${mokepon.nombre} ${mokepon.tipo}</p> 
                <img src= ${mokepon.imagen} alt=${mokepon.nombre} >
            </label>
        `
        contenedorMascotas.innerHTML += opcionDeMokepones
    })

    inputHipodoge = document.getElementById("Hipodoge")
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya")
    inputLangostelvis = document.getElementById("Langostelvis")
    inputTucapalma = document.getElementById("Tucapalma")
    inputPydos = document.getElementById("Pydos")

    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador) 

    botonRiniciar.addEventListener("click",reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch(`http://${ruta}/unirse`)
    .then((res)=>{
        if(res.ok){
            res.text()
                .then((respuesta)=>{
                    console.log(respuesta)
                    idJugador = respuesta
                })
        }
    })
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function seleccionarMascotaJugador(){

    /*si se usa select-option

    let mascota = document.getElementById("mascota").value
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    // alert("Seleccionaste a " + mascota )
    spanMascotaJugador.innerHTML = mascota
    sectionPartida.hidden = false
    */

    /*si se usa radio-button */
    
    if(inputHipodoge.checked){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputHipodoge.id)
    }else if(inputCapipepo.checked){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputCapipepo.id)
    }
    else if(inputRatigueya.checked){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputRatigueya.id)
    }
    else if(inputLangostelvis.checked){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputLangostelvis.id)
    }
    else if(inputTucapalma.checked){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputTucapalma.id)
    }
    else if(inputPydos.checked){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputPydos.id)
        // spanMascotaJugador.innerHTML = "Tu <br>"+inputPydos.id
        // sectionSeleccionMascota.style.display = "none"
        // sectionPartida.style.display = "flex"
        // alert("Seleccionaste a Pydos")
    }
    else{
        alert("No seleccionaste ninguna mascota")
    }

    if(mokeponJugador != undefined){
        sectionSeleccionMascota.style.display = "none"

        // sectionPartida.style.display = "flex"
        sectionVerMapa.style.display = "flex"
        dibujarMapa()
        spanMascotaJugador.innerHTML = "Tu <br>"+ mokeponJugador.nombre

        // seleccionarMascotaRival()
        // imprimirAtaques()
        mokeponJugador.idJugador = idJugador
        seleccionarMokepon(mokeponJugador) //mandar al backend

    }
    sectionReinicar.style.display = "none"
}

function seleccionarMokepon(mj){
    fetch(`http://${ruta}/mokepon/${idJugador}`,{
        method:"post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon : mj
        })
    })
}

function dibujarMapa(){

    intervalo = setInterval(pintarMapa,100)

    window.addEventListener("keydown",moverMokepon)
    window.addEventListener("keyup",detenerMokepon)
}

function pintarMapa(){
    lienzo.clearRect(mokeponJugador.x,mokeponJugador.y, mokeponJugador.ancho, mokeponJugador.alto)

    mokeponJugador.x += mokeponJugador.velocidadX
    mokeponJugador.y += mokeponJugador.velocidadY

    lienzo.drawImage(
        fondoMapa,
        0,
        0,
        mapa.width,
        mapa.height
    )
    
    // hipodogeRival.pintarMokepon(mokeponJugador.x,mokeponJugador.y)

    enviarPosicion(mokeponJugador.x,mokeponJugador.y)

    mokeponesRivales.forEach((mokepon)=>{
        mokepon.pintarMokepon()
        revisarColicion(mokepon)
    })
    // capipepoRival.pintarMokepon()
    // ratigueyaRival.pintarMokepon()
    
    

    mokeponJugador.pintarMokepon()
    
}

function enviarPosicion(x,y){
    console.log("Enviando posicion")
    fetch(`http://${ruta}/mokepon/${idJugador}/posicion`,{
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if(res.ok){
            res.json()
            .then(({enemigos})=>{
                
                
                mokeponesRivales = enemigos.map((enemigo)=>{
                    
                    const nombreMokepon = enemigo.mokepon.nombre || ""
                    let mokeponRival_ = seleccionarMascotaRival(nombreMokepon)
                    // mokeponRival.pintarMokepon()
                    console.log(nombreMokepon)
                    mokeponRival.x = enemigo.x
                    mokeponRival.y = enemigo.y
                    mokeponRival.idJugador = enemigo.id

                    return mokeponRival_
                })

            })
        }
    })
}

function moverMokepon(direccion){

    let tecla = direccion.keyCode

    if(direccion == "arriba" || tecla == 38 || tecla == 87){
        mokeponJugador.velocidadY = -5
        mokeponJugador.velocidadX = 0
    }else if( direccion == "derecha" || tecla == 39 || tecla == 68){
        mokeponJugador.velocidadX = 5
        mokeponJugador.velocidadY = 0
    }else if( direccion == "izquierda" || tecla == 37 || tecla == 65){
        mokeponJugador.velocidadX = -5
        mokeponJugador.velocidadY = 0
    }else if( direccion == "abajo" || tecla == 40 || tecla == 83){
        mokeponJugador.velocidadY = 5
        mokeponJugador.velocidadX = 0
    }

}

function detenerMokepon(){
    
    mokeponJugador.velocidadY = 0
    mokeponJugador.velocidadX = 0

}

function revisarColicion(enemigo){

    let abajoMascota = mokeponJugador.y + mokeponJugador.alto
    let arribaMascota = mokeponJugador.y 
    let derechaMascota = mokeponJugador.x + mokeponJugador.ancho
    let izquierdaMascota = mokeponJugador.x

    let abajoRival = enemigo.y + enemigo.alto
    let arribaRival = enemigo.y 
    let derechaRival = enemigo.x + enemigo.ancho
    let izquierdaRival = enemigo.x

    
    if ( 
        abajoMascota < arribaRival ||
        arribaMascota > abajoRival ||
        derechaMascota < izquierdaRival ||
        izquierdaMascota  > derechaRival
        ){
            return
        }
        
        mokeponJugador.idRival = enemigo.idJugador
        enemigo.idRival = mokeponJugador.idJugador
        idRival = mokeponJugador.idRival

        detenerMokepon()
        clearInterval(intervalo)
        alert("Que empiece la batalla contra "+enemigo.nombre+" rival")
        // seleccionarMascotaRival(enemigo)
        imprimirAtaques()
            
}

function seleccionarMascotaRival(){
    let numMokepones = mokepones.length - 1
    let mascotaAleatoria = aleatorio(0,numMokepones)
    mokeponRival = mokepones[mascotaAleatoria]

    spanMascotaRival.innerHTML = mokeponRival.nombre + "<br> rival"
}

function seleccionarMascotaRival(rival){

    mokeponRival = mokepones.find(mokepon => mokepon.nombre == rival)

    return mokeponRival


    // spanMascotaRival.innerHTML = mokeponRival.nombre + "<br> rival"

    // imprimirAtaques()
    // sectionPartida.style.display = "flex"
    // sectionVerMapa.style.display = "none"
}

function seleccionarMokeponRival(nombreMokepon){
    if(nombreMokepon === "Hipodoge"){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputHipodoge.id)
    }else if(nombreMokepon === "Hipodoge"){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputCapipepo.id)
    }
    else if(nombreMokepon === "Capipepo"){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputRatigueya.id)
    }
    else if(inombreMokepon === "Ratihueya"){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputLangostelvis.id)
    }
    else if(nombreMokepon === "Hipodoge"){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputTucapalma.id)
    }
    else if(nombreMokepon === "Hipodoge"){
        mokeponJugador = mokepones.find(mokepon => mokepon.nombre == inputPydos.id)
    }
}

function imprimirAtaques(){
    sectionPartida.style.display = "flex"
    sectionVerMapa.style.display = "none"

    opcionDeAtaques = ""

    mokeponJugador.ataques.forEach((ataque) =>{
        opcionDeAtaques = `

        <button id=${ataque.id} class="boton-ataque" >${ataque.nombre}</button>

        `
        contenedorAtaques.innerHTML += opcionDeAtaques

    })

    botones = document.querySelectorAll('.boton-ataque')


    secuenciaAtaque()
}

function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener("click",(e)=>{
            if(e.target.textContent == 'Fuego 🔥'){
                ataqueJugador.push("Fuego 🔥")
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if (e.target.textContent == 'Agua 💧'){
                ataqueJugador.push("Agua 💧")
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            else{
                ataqueJugador.push("Tierra 🌱")
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            // ataqueAleatorioRival()
            if(ataqueJugador.length === 5){
                enviarAtaques()
            }
            
        })
    })
}

function enviarAtaques(){
    fetch(`http://${ruta}/mokepon/${idJugador}/ataques`,{
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques,100)

}

function obtenerAtaques(){
    fetch(`http://${ruta}/mokepon/${idRival}/ataques`)
    .then((res)=>{
        if(res.ok){
            res.json()
            .then(({ataques})=>{
                if(ataques.length == 5){

                    ataqueRival = ataques
                    combate()
                }
            })
        }
    })
}
/* funciones descartadas por el combate contra otros jugadores

function ataqueAleatorioRival(){
    let tamanoAtaquesEnemigo = mokeponRival.ataques.length-1
    let ataqueAleatorio = aleatorio(0,tamanoAtaquesEnemigo)

    ataqueRival.push(mokeponRival.ataques[ataqueAleatorio].nombre)
    mokeponRival.ataques.splice(ataqueAleatorio,1)

    iniciarBatalla()
}

function iniciarBatalla(){
    if(ataqueJugador.length == ataqueJugador.length && ataqueJugador.length == 5){
        combate()
    }
}
*/

function combate(){

    clearInterval(intervalo)

    for(let i=0; i<ataqueJugador.length; i++ ){
        if(ataqueJugador[i] == ataqueRival[i]){
            crearMensaje(ataqueJugador[i],ataqueRival[i])
        }
        else if(ataqueJugador[i] == "Fuego 🔥" && ataqueRival[i] == "Tierra 🌱"){
            victoriasJugador++
            crearMensaje(ataqueJugador[i],ataqueRival[i])
        }
        else if(ataqueJugador[i] == "Agua 💧" && ataqueRival[i] == "Fuego 🔥"){
            victoriasJugador++
            crearMensaje(ataqueJugador[i],ataqueRival[i])
        }
        else if(ataqueJugador[i] == "Tierra 🌱" && ataqueRival[i] == "Agua 💧"){
            victoriasJugador++
            crearMensaje(ataqueJugador[i],ataqueRival[i])
        }
        else{
            victoriasRival++
            crearMensaje(ataqueJugador[i],ataqueRival[i])
        }
    }
    revisarVidas()
}

function crearMensaje(artaque1,ataque2){
    
  
    let nuevoAtaqueJugador = document.createElement("p")

    nuevoAtaqueJugador.innerHTML = artaque1

    let nuevoAtaqueRival = document.createElement("p")
    nuevoAtaqueRival.innerHTML = ataque2

    divAtaqueJugador.appendChild(nuevoAtaqueJugador)
    divAtaqueRival.appendChild(nuevoAtaqueRival)

}

function revisarVidas(){
    if(victoriasJugador > victoriasRival){
        crearMensajeFinal("🎉 Ganaste la partida 🎉")
        sectionReinicar.style.display = "block"
        sectionsubtitle.style.display = "none"
    }else if(victoriasRival > victoriasJugador){
        crearMensajeFinal("☠️ Perdiste la partida ☠️")
        sectionReinicar.style.display = "block"
        sectionsubtitle.style.display = "none"
    }else {
        crearMensajeFinal("🕊️ Ha sido un empate 🕊️")
        sectionReinicar.style.display = "block"
        sectionsubtitle.style.display = "none"
    }
    spanVidasRival.innerHTML = imprimirVictorias(victoriasRival)
    spanVidasJugador.innerHTML = imprimirVictorias(victoriasJugador)
}

function crearMensajeFinal(resultadoFinal){
    let parrafo =  " <br><h2>"+  resultadoFinal + "</h2><br>"
    
    sectionMensajes.innerHTML = parrafo

    contenedorAtaques.style.display = "none"
}

function imprimirVictorias(victorias){
    let mensajeVictorias = "Victorias: <br>"
    for(let i =0 ; i < victorias; i++){
        mensajeVictorias += "🏆"
    }
    if(victorias == 0){
        mensajeVictorias += "🤡"
    }
    return mensajeVictorias
}

function reiniciarJuego(){
    location.reload()
}

iniciarJuego()