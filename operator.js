// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.3333...
console.log(a % b); // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 1000

// 2. Assignment Operators
let x = 5;

x += 3; // x = x + 3
console.log(x); // 8

x -= 2; // x = x - 2
console.log(x); // 6

x *= 2; // x = x * 2
console.log(x); // 12

x /= 3; // x = x / 3
console.log(x); // 4

// 3. Comparison Operators
console.log(5 == "5");  // true (loose equality, type coercion)
console.log(5 === "5"); // false (strict equality, no type coercion)
console.log(5 != "5");  // false (loose inequality)
console.log(5 !== "5"); // true (strict inequality)
console.log(5 > 3);     // true
console.log(5 < 3);     // false

// 4. Logical Operators
console.log(true && false); // AND: false
console.log(true || false); // OR: true
console.log(!true);         // NOT: false

// 5. Bitwise Operators
console.log(5 & 1); // AND: 1 (0101 & 0001 = 0001)
console.log(5 | 1); // OR: 5 (0101 | 0001 = 0101)
console.log(5 ^ 1); // XOR: 4 (0101 ^ 0001 = 0100)
console.log(~5);    // NOT: -6 (Inverts all bits)

// 6. Ternary Operator (Conditional)
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes

// 7. Nullish Coalescing Operator (??)
let name = null;
console.log(name ?? "Guest"); // Guest

// 8. Optional Chaining Operator (?.)
let user = { profile: { name: "John" } };
console.log(user.profile?.name); // John
console.log(user.address?.street); // undefined, no error
