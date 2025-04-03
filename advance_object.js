// collection of key and value pair
let obj = {
    name: 'shailendra',
    age: 35,
    grade: 'A'
}
console.log(obj.name)
// object method and this key world
// method
let person = {
    fullname: 'shailendra',
    lastname: 'singh',
    fullName(){
       return `${this.fullname} ${this.lastname}`;
    }
};
console.log(person.fullName());

// A lexical scope in JavaScript refers to the way 
// variables are resolved in nested functions. A function’s 
// scope is determined by where it’s defined, not where it’s called. 
// The inner function has access to variables from its outer function 
// due to closure.