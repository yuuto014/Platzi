const express = require("express")
const cors = require("cors")
const { application } = require("express")

const app = express()

app.use(express.static("public"))
app.use(cors())
app.use(express.json()) //recibir peticiones post con JSON

const jugadores = []

class Jugador {
    constructor(id){
        this.id = id
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }

    asignarAtaques(ataques){
        this.ataques = ataques
    }

    actualizarPosicion(x,y){
        this.x = x 
        this.y = y
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre 
    }
}

app.get("/",(req,res)=>{
    // res.send("hola")
})

app.get("/unirse", (req,res)=>{
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin","*")

    res.send(id)
})

app.post("/mokepon/:idJugador",(req,res)=>{
    const idJugador = req.params.idJugador || ""
    const nombreMokepon = req.body.mokepon.nombre || ""

    const mokepon = new Mokepon(nombreMokepon);

    const jugadorIndex = jugadores.findIndex((jugador) => idJugador === jugador.id)

    if(jugadorIndex >= 0 ){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }

    // console.log(jugadores)
    console.log(idJugador)
    res.send(idJugador)
    res.end()
})

app.post("/mokepon/:idJugador/posicion",(req,res)=>{
    const idJugador = req.params.idJugador || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => idJugador === jugador.id)

    if(jugadorIndex >= 0 ){
        jugadores[jugadorIndex].actualizarPosicion(x,y)
    }

    const enemigos = jugadores.filter((jugador)=> idJugador !== jugador.id )


    res.send({
        enemigos
    })

    res.end()

})

app.post("/mokepon/:idJugador/ataques",(req,res)=>{
    const idJugador = req.params.idJugador || ""
    const ataques = req.body.ataques || []

    const jugadorIndex = jugadores.findIndex((jugador) => idJugador === jugador.id)

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }

    console.log(jugadores)

    res.end()
})

app.get("/mokepon/:idJugador/ataques",(req,res)=>{
    const idJugador = req.params.idJugador || ""

    const jugador = jugadores.find((jugador) => jugador.id === idJugador)

    console.log("Llamando al jugador : "+ jugador)

    res.send({
        ataques: jugador.ataques || []
    })

})

app.listen(8080,()=>{
    console.log("Servidor OnLine")
})