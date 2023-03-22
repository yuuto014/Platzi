//flap
const array = [1,2,5,3,2,6,1,[1,2,3,6,5,[2,4,8,10]]];

console.log(array);
console.log(array.flat(1));
console.log(array.flat(2));
console.log(array.flat(3));

//flapmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value,value*2]));