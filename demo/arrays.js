/* Array is a collection of fixed number of homogenous elements in a contigious memory location 

 JavaScript:
  
   Array - collection of elements.

   1. dynamic datatypes
   2. dynamic array structure.


   syntax: 
      let variableName = [];
      let variableName = [element1,element2,element3.....];
*/


let primeNumbers = [1,3,5,7,11,13,17,19,21];

console.log(primeNumbers[3]);
console.log(primeNumbers[6]);
console.log(primeNumbers[16]);
console.log(primeNumbers[-4]);
console.log(primeNumbers.length);

primeNumbers[9] = 23;

console.log(primeNumbers);

primeNumbers[15] = 29;

console.log(primeNumbers);

console.log(primeNumbers[12]);

primeNumbers[2] = 79;

console.log(primeNumbers);


/*for(let i =0; i < primeNumbers.length; i++){
    console.log(i);
}*/


/* for-of, for-in */


// of - gives the elements.

/*for(let i of primeNumbers){
    console.log(i);
}*/

// "in" gives the indexs;

/*for(let i in primeNumbers){
    console.log(i+" "+ primeNumbers[i]);
}
*/

// to add elements at last index.
primeNumbers.push(4);
console.log(primeNumbers);
primeNumbers.push(8,7,6);
console.log(primeNumbers);


// retrive , return and remove from array.
let num = primeNumbers.pop();
console.log(num);


console.log(primeNumbers);



let index = primeNumbers.indexOf(13);
console.log(index);
// first index
index = primeNumbers.indexOf(7);
console.log(index);
index = primeNumbers.lastIndexOf(7);
console.log(index);


/*for(let num of primeNumbers){
    print(num);
}*/



/*function print(num){
    console.log(num);
}*/

/*let print = function(num){
    console.log(num);
}*/

 /*let print = num => console.log(num);
primeNumbers.forEach(print);*/


//primeNumbers.forEach((num) => console.log(num));

let foundNum = primeNumbers.find(num=> num==15);
console.log(foundNum);


let nums = [4,8,9,23,112,56,107,43,89,54,34];

/*
let evenNums = [];
for(let num of nums){
    if(num%2==0){
        evenNums.push(num);
    }
}
console.log(evenNums);

for(let num of evenNums){
    console.log(num);
}

*/

let evenNums = nums.filter(num => num%2==0);
console.log(evenNums);
evenNums.forEach(num=>console.log(num));


//sort function by default arrange the element in asceding order as strings
let orderedNums = nums.sort();
console.log(orderedNums);


function compareNums(a,b){
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
}

orderedNums = nums.sort(compareNums);
console.log(orderedNums);

orderedNums = nums.sort((a,b) => (a-b));
console.log(orderedNums);








