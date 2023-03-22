new Promise((simon, nel ) => (true) ? simon() : nel())
/*Por si alguien más tenía la duda.
“resolve” y “reject” no son palabras reservadas 
(pero sí comúnmente usadas en la sintaxis de una promesa) 
Se puede usar cualquier nombre como
    */
const promise1 = new Promise((resolve,reject) => reject("Reject"));
const promise2 = new Promise((resolve,reject) => resolve("Resolve"));
const promise3 = new Promise((resolve,reject) => resolve("Resolve"));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))
