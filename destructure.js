// object detructuring - astract properties from an object in variable
 const users = {
    name1: "shailendra",
    age: 36
 };
 const {name1, age} = users;
 console.log(name1, age);

 const colorName = ['red', 'green', 'blue'];
 const [first, second, third] = colorName;
 console.log(first, second, third);
