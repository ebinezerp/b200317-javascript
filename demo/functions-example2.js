/* function functionname(parameters){} */

// Expression functions / functions as expressions.

  /*let variablename = function(parameters){
      
  }*/


let addition = function(a,b){
 return a+b;
}

let value = addition(6,2);
console.log(value);


let greeting = function(){
    console.log('hello');
}

let myValue = greeting();
console.log(myValue); //undefined

// Difference:


 myFun();

function myFun(){
    console.log("my function");
}

myFun();


//duplicateMyFun();

let duplicateMyFun = function(){
    console.log("my function");
}

duplicateMyFun();

// using experssion functions, we are storing functions in a variable

console.log(duplicateMyFun);

//function variable;
// in experssion, we can store one variable value in another
// let x = 10;
// y = x;


let randonFun = duplicateMyFun;

duplicateMyFun();
randonFun();


// functions are paramters.

let goodBye = function(){
    console.log('Bye...')
}

/*function party(greet,celebrate,farewel){
    console.log(greet);
    console.log(celebrate);
    console.log(farewel);
}

party('hello', 'Having fun with music and drinks', 'bye..');
*/


function party(greet,celebrate,farewel){
    greet();
    console.log(celebrate);
    farewel();
}

party(greeting, 'Having fun with music and drinks', goodBye);