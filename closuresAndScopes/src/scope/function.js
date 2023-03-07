function greeting(){
    let userNanme = 'Juan';
    console.log(userNanme)

    if(userNanme === 'Juan'){
        console.log(`Hello ${userNanme}`)
    }
}

greeting()
console.log(userNanme) // al ser una variable local o de funcion no se puede acceder a la variable