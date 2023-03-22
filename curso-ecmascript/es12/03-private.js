class user{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    #speak(){
        return "Hello";
    }
    greeting(){
        return `${this.name} says: ${this.speak()}`;
    }
    get #uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const usuario = new user("Juan",27);
console.log(usuario.uAge);
console.log(usuario.uAge = 26);
