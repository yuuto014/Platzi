//variables 

var a ; // declarando la variable a
var b = "b"; //declaramos y asignamos la variable a
b = "bb"; //reasignando la variable
var a = "aa"; //redeclaracion de la variable


// global scope

var fruit = "Apple"; //global

function besFruit(){
    console.log(fruit);
}

besFruit();
console.log(fruit);

function countries(){
    country = "Colombia";//asignacion, ademas de crear variable local
    console.log(country);
}

countries();
console.log(country);
