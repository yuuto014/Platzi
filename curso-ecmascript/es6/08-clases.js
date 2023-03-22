class user{} //declaracion de una clase
const newUser = new user(); //instancia de una clase

class User{
    //Metodos
    geeting(){
        return "hello";
    }
}

//generar instancia
const juan = new User();
console.log(juan.geeting());

// constructor

class NewUser{
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log(`Nuevo usuario`);
    }
    speak(){
        return `hello`
    }
    geeting(){
        return `${this.name} says: ${this.speak()}`;
    }
}

const pedro = new NewUser("Pedro",22);
console.log(pedro.geeting());

//setters and getters

class user{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return `hello`;
    }
    geeting(){
        return `${this.name} says: ${this.speak()}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(u){
        this.age = u;
    }
}

const sandro = new user("Sandro",35);
console.log(sandro.uAge);
console.log(sandro.uAge = 45);
console.log(sandro.uAge);