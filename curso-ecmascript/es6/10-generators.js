function* iterate(array){
    for(let element of array){
        yield element;
    }
}

const it = iterate(["Juan","Pedro","Andres","Daniel","Ana","Maria"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.value);