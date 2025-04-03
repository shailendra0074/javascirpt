// JavaScript Function?
// A JavaScript function is a block of code designed to perform 
// a specific task. It runs when "called" or "invoked." 
// You can pass data to a function using parameters, and it
//  can return a result using return.

function sum(a, b) {
    return a + b;
}
console.log(sum(5,10));

// function expresion
const great = function(){
    console.log("message")
}
// console.log(great);
great();

// Arrow function
const add = (a,b) =>{
  console.log("addition = " + (a+b));
}
add(5,9);

// default parameter in function

const fullname = function(fname = "shailendra"){
    console.log(fname);
}
fullname();

// higher order function & call back function
function passkey(arr, callback){
    for(i=0; i< arr.length; i++){
        callback(arr[i]);
    }
}
let arr1 = [1,2];
passkey(arr1, function(num){
    console.log(num*2);
})

// scope & closer
function outer(){
    let count = 0;
    return function inner(){
      count ++;
      console.log(`Count = ${count}`)
    };
}
let counter = outer();
counter();

//note: closer rember to outer and inner variable

// An Immediately Invoked Function Expression (IIFE) 
// is a JavaScript function that runs as soon as it is defined. 
// It’s commonly used to create a local scope and avoid polluting 
// the global namespace.
(function() {
    console.log("Hello from IIFE!");
})();

// Currying with Arrow Functions:
const addnum = a => b => c => a + b + c;

console.log(addnum(1)(2)(3)); // Output: 6
