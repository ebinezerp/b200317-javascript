// core java -> lamda expression


/*
function greeting(){
    console.log('hello');
}

let greeting = function(){
    console.log('hello');
}

let greeting = () => console.log('hello');

function sum(a,b){
    return a+b;
}

let sum = function(a,b){
    return a+b;
}
*/

/*
let sum = (a,b) => a+b;

let result = sum(5,6);

console.log(result);
*/

let greeting = () => console.log('Hello');
let goodBye = () => console.log('Bye..');

function party(greet, celebration, farewel){
    greet();
    console.log(celebration);
    farewel();
}

party(greeting, 'having fun....', goodBye);

party(()=>console.log('Hello'), 'Having fun', ()=> console.log('Bye'));