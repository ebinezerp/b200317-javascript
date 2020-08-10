
//function defination
function greeting(){
    console.log("hello");
}


//function calling
greeting(); 

function add(a,b){
    console.log(a+b);
}

add(4,5);
add(4,'ravi');
add("ravi",true);
add();
add(5);
add('ravi');

//default parameters

function mul(a=0,b=0){
    console.log(a*b);
}

mul();
mul(4); // 4 will be assigned to a. and for b default value will be assigned.
//if there is requirement, to b value without passing a value.
// ans to above requiremnt is - can't
// Important point to remember is - always use mandaory parameter first, then
// go for optional parameters.
/*
   function functionName(mandatory parameters, optional paramters){

   }
*/


// Local variable:
function  myFun(){
    let name ="ravi";
    console.log(name);
}

myFun();

console.log(name);

// Global variable:
// If variable are declared outside of the function.

//global variable - inside and outside of the functions.
let firstname = "perumala";

function print(name){
    console.log(firstname+" "+name);
}


print('ebinezer');

console.log(firstname);


// return statement.

function sub(a,b){
    return a-b;
}


let value = sub(5,2);

console.log(value);


function div(a,b){
    if(b!=0){
        return a/b;
    }else{
        return "b is zero";
    }
}

value = div(5,3);

console.log(value);


value = div(5,0);

console.log(value);