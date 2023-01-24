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
const divResultado = document.getElementById("parrafo-resultado")
const divAtaqueJugador = document.getElementById("ataque-jugador")
const divAtaqueRival = document.getElementById("ataque-rival")

const sectionsubtitle =  document.getElementById("subtitle")

let botonFuego 
let botonAgua 
let botonTierra 

let botones = []

let mokepones = []

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

let secuenciaAtaquesJugador = []

let ataqueJugador
let ataqueRival
let vidasJugador = 3
let vidasRival = 3

class Mokepon{
    constructor(nombre, imagen, vida, tipo){
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.tipo = tipo
        this.ataques = []
    }

}

let hipodoge = new Mokepon("Hipodoge","https://static.platzi.com/media/user_upload/hipodoge-76597a8f-782f-4beb-b9ab-53191d217f12.jpg", 3,"💧")

let capipepo = new Mokepon("Capipepo","https://static.platzi.com/media/user_upload/capipepo-26b57f58-e390-416a-b126-0bcf8c8ef477.jpg",3,"🌱")

let ratigueya = new Mokepon("Ratigueya","https://static.platzi.com/media/user_upload/ratigueya-37a7cdfe-6921-467c-92f6-44bb7ae506e7.jpg",3,"🔥")

let langostelvis = new Mokepon("Langostelvis","https://static.platzi.com/media/user_upload/langostelvis-73e35035-de30-4f9c-9802-e31a26110bd0.jpg",3,"💧🔥")

let tucapalma = new Mokepon("Tucapalma","https://static.platzi.com/media/user_upload/tucapalma-3263a05e-b205-49a0-943d-19590a3949e1.jpg",3,"💧🌱")

let pydos = new Mokepon("Pydos","https://static.platzi.com/media/user_upload/pydos-6e458237-73df-40fb-be7c-2d4b477be360.jpg",3,"🌱🔥")

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)

hipodoge.ataques.push(
    {nombre: "💧",id : "boton-agua"},
    {nombre: "💧",id : "boton-agua"},
    {nombre: "💧",id : "boton-agua"},
    {nombre: "🔥",id : "boton-fuego"},
    {nombre: "🌱",id : "boton-tierra"}
)

capipepo.ataques.push(
    {nombre: "🌱",id : "boton-tierra"},
    {nombre: "🌱",id : "boton-tierra"},
    {nombre: "🌱",id : "boton-tierra"},
    {nombre: "💧",id : "boton-agua"},
    {nombre: "🔥",id : "boton-fuego"}
    
)

ratigueya.ataques.push(
    {nombre: "🔥",id : "boton-fuego"},
    {nombre: "🔥",id : "boton-fuego"},
    {nombre: "🔥",id : "boton-fuego"},
    {nombre: "💧",id : "boton-agua"},
    {nombre: "🌱",id : "boton-tierra"}
)

langostelvis.ataques.push(
    {nombre: "💧",id : "boton-agua"},
    {nombre: "💧",id : "boton-agua"},
    {nombre: "🔥",id : "boton-fuego"},
    {nombre: "🔥",id : "boton-fuego"},
    {nombre: "🌱",id : "boton-tierra"}
)

tucapalma.ataques.push(
    {nombre: "💧",id : "boton-agua"},
    {nombre: "💧",id : "boton-agua"},
    {nombre: "🌱",id : "boton-tierra"},
    {nombre: "🌱",id : "boton-tierra"},
    {nombre: "🔥",id : "boton-fuego"}
)

pydos.ataques.push(
    {nombre: "🔥",id : "boton-fuego"},
    {nombre: "🔥",id : "boton-fuego"},
    {nombre: "🌱",id : "boton-tierra"},
    {nombre: "🌱",id : "boton-tierra"},
    {nombre: "💧",id : "boton-agua"}
)


function iniciarJuego(){
     
    sectionPartida.style.display = "none"

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
    

    
    // botonFuego.addEventListener("click",ataqueFuego)
    // botonAgua.addEventListener("click",ataqueAgua)
    // botonTierra.addEventListener("click",ataqueTierra)

    botonRiniciar.addEventListener("click",reiniciarJuego)
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
        sectionPartida.style.display = "flex"
        spanMascotaJugador.innerHTML = "Tu <br>"+ mokeponJugador.nombre

        imprimirAtaques()
        seleccionarMascotaRival()

    }
    sectionReinicar.style.display = "none"
}

function imprimirAtaques(){

    mokeponJugador.ataques.forEach((ataque) =>{
        opcionDeAtaques = `

        <button id=${ataque.id} class="boton-ataque" >${ataque.nombre}</button>

        `
        contenedorAtaques.innerHTML += opcionDeAtaques

    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")

    botones = document.querySelectorAll('.boton-ataque')

    // botonFuego.addEventListener("click",ataqueFuego)
    // botonAgua.addEventListener("click",ataqueAgua)
    // botonTierra.addEventListener("click",ataqueTierra)

    secuenciaAtaque()
}

function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener("click",(e)=>{
            // if(e.target.textContent == '🔥'){
                
            // }
            // secuenciaAtaquesJugador.push(e.target.textContent)
            // boton.style.display = "none"
            if(e.target.textContent == '🔥'){
                ataqueFuego()
            }else if (e.target.textContent == '💧'){
                ataqueAgua()
            }
            else{
                ataqueTierra()
            }
        })
    })
}

function seleccionarMascotaRival(){
    let numMokepones = mokepones.length - 1
    let mascotaAleatoria = aleatorio(0,numMokepones)
    mokeponRival = mokepones[mascotaAleatoria]

    spanMascotaRival.innerHTML = mokeponRival.nombre + "<br> rival"

}

function ataqueFuego(){
    ataqueJugador = "Fuego 🔥"
    ataqueAleatorioRival()
}

function ataqueAgua(){
    ataqueJugador = "Agua 💧"
    ataqueAleatorioRival()
}

function ataqueTierra(){
    ataqueJugador = "Tierra 🌱"
    ataqueAleatorioRival()
}

function ataqueAleatorioRival(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio ==1){
        ataqueRival = "Fuego 🔥"
    }else if( ataqueAleatorio == 2){
        ataqueRival = "Agua 💧"
    }else{
        ataqueRival = "Tierra 🌱"
    }
    combate()
}

function combate(){

    if(ataqueJugador == ataqueRival){
        crearMensaje("Empate")
    }
    else if(ataqueJugador == "Fuego 🔥" && ataqueRival == "Tierra 🌱"){
        vidasRival--
        crearMensaje("Ganaste")
    }
    else if(ataqueJugador == "Agua 💧" && ataqueRival == "Fuego 🔥"){
        vidasRival--
        crearMensaje("Ganaste")
    }
    else if(ataqueJugador == "Tierra 🌱" && ataqueRival == "Agua 💧"){
        vidasRival--
        crearMensaje("Ganaste")
    }
    else{
        vidasJugador--
        crearMensaje("Perdiste")
    }

    spanVidasRival.innerHTML = imprimirVidas(vidasRival)
    spanVidasJugador.innerHTML = imprimirVidas(vidasJugador)
    revisarVidas()
}

function crearMensaje(resultadoCombate){
    
    // let parrafo = document.createElement("p")
    // parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", la mascota rival ataco con "+ ataqueRival + " <strong>"+ resultadoCombate + "</strong>"

    let resultado  = " <strong>"+ resultadoCombate + "</strong>"

    let nuevoAtaqueJugador = document.createElement("p")
    nuevoAtaqueJugador.innerHTML = ataqueJugador

    let nuevoAtaqueRival = document.createElement("p")
    nuevoAtaqueRival.innerHTML = ataqueRival

    divResultado.innerHTML = resultado
    divAtaqueJugador.appendChild(nuevoAtaqueJugador)
    divAtaqueRival.appendChild(nuevoAtaqueRival)

}

function crearMensajeFinal(resultadoFinal){
    let parrafo =  " <br><h2>"+  resultadoFinal + "</h2><br>"
    
    sectionMensajes.innerHTML = parrafo

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    contenedorAtaques.style.display = "none"
}

function revisarVidas(){
    if(vidasRival == 0){
        crearMensajeFinal("🎉 Ganaste la partida 🎉")
        sectionReinicar.style.display = "block"
        sectionsubtitle.style.display = "none"
    }else if(vidasJugador == 0){
        crearMensajeFinal("☠️ Perdiste la partida ☠️")
        sectionReinicar.style.display = "block"
        sectionsubtitle.style.display = "none"
    }
}

function imprimirVidas(vidas){
    let mensajeVidas = "vidas: "
    for(let i =0 ; i < vidas; i++){
        mensajeVidas += "♥️"
    }
    return mensajeVidas
}

function reiniciarJuego(){
    location.reload()
}

// window.addEventListener("load",iniciarJuego)\
iniciarJuego()