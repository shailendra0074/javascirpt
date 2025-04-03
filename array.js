// Creating an Array:
let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "Hello", true, null];

// Accessing Array Elements:
console.log(fruits[0]); // Output: Apple
console.log(numbers[3]); // Output: 4

// Common Array Methods:
fruits.push("Grapes"); // Adds to the end
console.log(fruits); // ["Apple", "Banana", "Orange", "Grapes"]
fruits.pop(); // Removes the last element
console.log(fruits); // ["Apple", "Banana", "Orange"]
fruits.shift(); // Removes the first element
console.log(fruits); // ["Banana", "Orange"]
fruits.unshift("Strawberry"); // Adds to the start
console.log(fruits); // ["Strawberry", "Banana", "Orange"]
console.log(fruits.length); // Array length: 3
console.log(fruits.indexOf("Banana")); // Position: 1
console.log(fruits.includes("Orange")); // true

// Looping Through an Array:
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
  });

//   Array of Objects Example:
let products = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
  ];
  
  products.forEach(product => {
    console.log(product.name, product.price);
  });

  
