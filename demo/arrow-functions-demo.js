/*

function isEven(num){
    return num%2==0;
}

let isEven = function(num){
    return num%2==0;
}

let isEven   =  (num) => {
        return num%2==0;
}

let isEven = (num) => num%2==0;

*/

let num = 56;


let isDivisible = (num,dem) => num%dem==0;

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (!isDivisible()) {
            return false;
        }
    }
    return true;
}
