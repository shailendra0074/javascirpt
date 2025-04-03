// // for Loop: Runs a block of code a specific number of times.
// for (let i = 0; i < 5; i++) {
//     console.log("Iteration:", i);
// }
// // Output: 0, 1, 2, 3, 4

// // while Loop: Runs as long as the condition is true.
// let count = 0;
// while (count < 3) {
//     console.log("Count:", count);
//     count++;
// }
// // Output: 0, 1, 2

// // do...while Loop: Executes the code block once before checking the condition.
// let num = 0;
// do {
//     console.log("Number:", num);
//     num++;
// } while (num < 3);
// // Output: 0, 1, 2

// // for...of Loop: Iterates over iterable objects (arrays, strings, etc.).
// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }
// // Output: apple, banana, cherry

// // for...in Loop: Iterates over the properties of an object.
// const person = { name: "Alex", age: 30 };
// for (const key in person) {
//     console.log(key, ":", person[key]);
// }
// // Output: name : Alex, age : 30

// // Creating a Map
// // Adding, Getting, and Deleting Elements
// // set(key, value): Adds or updates a key-value pair.
// // get(key): Returns the value associated with the key.
// // has(key): Checks if a key exists.
// // delete(key): Removes a key-value pair.
// // clear(): Removes all key-value pairs.
// // size: Returns the number of key-value pairs.
// let users = new Map([  
//     ["name", 'shailendra'],
//     ['age', 24],
//     ["city", "agra"]
// ]);
// for(let [key, value] of users){
//     console.log(`${key} : ${value}`);
// }

// // Using entries() with Map
// for (let [key, value] of users.entries()) {
//     console.log(`${key} : ${value}`);
// }
// // Output:
// // name : Shailendra
// // age : 24
// // city : Agra

// // Using entries() with Arrays

// let fruitss = ["apple", "banana", "cherry"];

// for (let [index, value] of fruits.entriess()) {
//     console.log(`Index ${index} : ${value}`);
// }
// // Output:
// // Index 0 : apple
// // Index 1 : banana
// // Index 2 : cherry

// Advance concept for loops
// breaks statements

for(let p=0; p<=10; p++){
  if(p===5)
    break;
    console.log(p);
  
}

//  continue
for(let k=0; k<=10; k++){
    if(k===5)
      break;
      console.log(p);
    
  }
  // nested loop
  for (let i = 1; i <= 3; i++) {
    console.log("Outer loop iteration:", i);
    
    for (let j = 1; j <= 2; j++) {
        console.log("  Inner loop iteration:", j);
    }
}

  