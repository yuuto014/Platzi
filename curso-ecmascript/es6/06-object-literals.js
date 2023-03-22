// enahced object literals
/*
function newUser(user, age, country){
    return{ user: user,  age: age,   country: country}
}*/
//=>
function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("Juan",26,"Col",1))

