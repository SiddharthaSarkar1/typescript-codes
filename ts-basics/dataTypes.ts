let value : number | string; 

value=10;
console.log("Number: "+ value);
value="helllooo";
console.log("String: "+value);

//This will allow both the types
let array: Array<number | string>=[10,"sidd",30,"good"];

console.log(array)