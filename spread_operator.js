// spread operator - expands elements of an array or objects
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

// spread_operator - objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj = { ...obj1, ...obj2 };
console.log(obj); // Output: { a: 1, b: 2, c: 3, d: 4 }