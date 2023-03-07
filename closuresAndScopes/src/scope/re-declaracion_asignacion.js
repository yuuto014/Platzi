var firsName; //Udefined
firsName = 'Juan';

console.log(firsName);

//redeclaracion
var lastName = 'Camilo'; //declarar / asignar
lastName = 'Larrota'; //reasignar
console.log(lastName)

//reasignacion
var secondName = "Carlos"; // declarar / asignar
var secondName = "Camilo"; //reasignando 
console.log(secondName);

//Usando let

let fruit = 'Apple'; //declarar / asignar
fruit = 'Pinapple'; //reasignar
console.log(fruit);

// let fruit = 'Banana'; //Genera error - no se puede re declarar un let

//usando const

// const 
const animal = "Cat"; //declarar y asignar
// animal = "Dog"; // reasignar - No se puede reasignar un const
// const animal = "Dog"; //redeclarar - No se puede redeclarar un const
console.log(animal);

const vehicles = [];
vehicles.push("Car")
console.log(vehicles)

vehicles.pop()
console.log(vehicles)
