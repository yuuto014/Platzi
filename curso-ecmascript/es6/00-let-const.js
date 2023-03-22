var lastName = "David";
lastName = "Juan";
console.log(lastName)

let fruit = "apple";
fruit = "kiwi";
console.log(fruit);

const animal = "Cat";
// animal = "dog";
console.log(animal);

const fruits = ()=>{
    if(true){
        var fruit1 = "Apple"; //funcion scope 
        let fruit2 = "Banana"; //block scope
        const fruit3 = "Kiwi"; //block scope
    }
    console.log(fruit1);
    // console.log(fruit2);
    // console.log(fruit3);
}

fruits();
