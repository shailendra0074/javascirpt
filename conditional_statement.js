// 1. if Statement
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}

// 2. if...else Statement
let age2 = 16;

if (age2 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 3. if...else if...else Statement
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 4. switch Statement
let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Tuesday":
        console.log("Second day of the week");
        break;
    case "Wednesday":
        console.log("Midweek");
        break;
    default:
        console.log("It's another day");
}

// 5. Ternary Operator (?:)
let age3 = 20;
let access = (age3 >= 18) ? "Access granted" : "Access denied";

console.log(access);

// nested conditional

let age4 = 75;
if(age4 >= 18){
    console.log("Vote");
    if(age4 >=65){
      return;
    }
    console.log("return contintion");
}
else{
    console.log("not Vote");
}
