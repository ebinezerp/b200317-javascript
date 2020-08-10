let num = 10;
console.log(num);

console.log(typeof num);

num = 10.05;
console.log(num);

console.log(typeof num);

num = true;

console.log(num);
console.log(typeof num);

num = "10";

console.log(num);

console.log(typeof num);

num = 'a';

console.log(typeof num);


let name;

console.log(name);


let num1 = 10;
let num2 = 20;

console.log(num1+num2);

name = "ravi";

console.log(name+num1+num2);

console.log(name+(num1+num2));

let num3;

console.log(num1+num3); //NAN -> Not a Number

console.log(name+num3);

console.log(num1/0);


// javascript -> ""/''
name="ebinezer";
let designation =  'Tech-Mentor';

console.log('My name is '+name+'. I am working as '+designation);
console.log(`My name is ${name}. I am working as ${designation}`);


// string, variable, expression
console.log(`${20*10}`);


num1 = 10;
num2 = 5;

console.log(num1%num2);

num2 = 4;

console.log(num1%num2);


num1 = 10;
num2 = 10.0;

console.log(num1===num2);

num2 = "10";


// will num2 is convertable is number
console.log(num1==num2);
// == -> compare the values
// === -> compares datatype and its value.
console.log(num1===num2);



let isItPossible= true;
num1 = 1;

console.log(isItPossible==num1);
console.log(isItPossible === num1);

console.log(isItPossible == 10);

// true-1 and false-0