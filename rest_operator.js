// rest operator - collect remaining element into an array or objects
function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));