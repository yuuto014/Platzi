//arrays destructuring
let fruits = ["Apple","Banana"];
let[a,b] = fruits;

console.log(a,fruits[1]);

//object destructuring

let user = {
    name: "Juan",
    age: 26
}

let {name,age} = user;
console.log(name,user.age);