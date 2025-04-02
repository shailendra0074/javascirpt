// Creating an Object Method:
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log(person.fullName()); // Output: John Doe
 
//   ES6 Method Shorthand:  
let car = {
    brand: "Toyota",
    model: "Camry",
    start() {
      console.log("The car has started");
    }
  };
  
  car.start(); // Output: The car has started

//   Adding Methods Dynamically:
let calculator = {
    num1: 5,
    num2: 3
  };
  
  calculator.add = function() {
    return this.num1 + this.num2;
  };
  
  console.log(calculator.add()); // Output: 8
  
//   Object with Multiple Methods:  
let rectangle = {
    length: 10,
    width: 5,
    
    area() {
      return this.length * this.width;
    },
    
    perimeter() {
      return 2 * (this.length + this.width);
    }
  };
  
  console.log(rectangle.area()); // Output: 50
  console.log(rectangle.perimeter()); // Output: 30

//   Built-in Object Methods:
let user = { name: "Alice", age: 25 };

console.log(Object.keys(user)); // Output: ["name", "age"]
console.log(Object.values(user)); // Output: ["Alice", 25]
console.log(Object.entries(user)); // Output: [["name", "Alice"], ["age", 25]]
