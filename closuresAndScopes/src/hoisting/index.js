console.log(nameOfDog);
var nameOfDog = "Elperrin"

/*
--como se ve segun el hoisting
var nameOfDog; undefined
console.log(nameOfDog);
var nameOfDog = "Elperrin";
console.log(nameOfDog);
*/
nameOfDog();

function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = "Elmito";
