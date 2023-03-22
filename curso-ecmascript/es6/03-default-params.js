function newUsser(name, age, country){
    var name = name || "Juan";
    var age = age || 26;
    var country = country ||  "Col";
    console.log(name,age,country);
}

newUsser();
newUsser("Camilo",27,"Col")

// nueva forma

function newAdmin(name = "Juan",age=26,country="Mx"){
    console.log(name, age, country);
}
newAdmin();
newAdmin("Daniel",27,"Col")