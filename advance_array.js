const fruits = ['apple', 'banana', 'grapes'];
console.log(fruits[1]);

const nums = [1, 2, 3];
nums.push(4); // add value
console.log(nums);
nums.pop(); // remove value
console.log(nums);
// map() create new array and apply to other functionality
const squared = nums.map((num) => {
    return num*num;
});
console.log(squared);

// filter() - filter element based on conditions
const ages = [18, 15, 35, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults);

// reduce() - reduces an array to a single value to applying function
const prices = [100, 200, 300];
const totalAmount = prices.reduce((sum, price) => sum + price, 0);
console.log(totalAmount);
