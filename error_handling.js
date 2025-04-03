// Basic Error Handling Example
// try: Runs the code block. If an error occurs, control moves to catch.
// catch: Handles the error. Receives the error object (error.message gives the error message).
// finally: Always executes, regardless of an error. Used for cleanup (e.g., closing files, freeing resources).
try {
    let num = 10;
    let result = num / 0; // Division by zero (not an error in JS, but let's pretend it is)
    console.log("Result:", result);

    // Manually throwing an error
    throw new Error("Something went wrong!");
} catch (error) {
    console.error("Error caught:", error.message);
} finally {
    console.log("Finally block executed.");
}
// output
// Result: Infinity
// Error caught: Something went wrong!
// Finally block executed.

// Asynchronous Error Handling
// Errors in asynchronous code require .catch for promises or try...catch with async/await:
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Async error:", error.message);
    }
}

fetchData();
