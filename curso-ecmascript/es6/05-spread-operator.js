function solution(
    json1 = 
    {
    name: "Mr. Michi",
    food: "Pescado"
    },
    json2 =
    {
    age: 12,
    color: "Blanco"
    }){
    // Tu código aquí
    let obj = {
        ...json1,
        ...json2
    };
    
    return obj;
   }

solution({
    name: "Mr. Michi",
    food: "Pescado"
},
{
    name: "Bigotes",
    food: "Pollito"
})