// Asynchronous programming allows a program to start a 
// task and move on without waiting for it to finish. When 
// the task is done, the program is notified and continues
//  from there.

// It’s super useful for things that take time—like:
// Fetching data from a server
// Reading files
// Waiting for user input
// Setting timers

// sync
console.log("sync operation first");
console.log("sync operation second");
console.log("sync operation third");

console.log("async operation first");
setTimeout(() => {
    console.log("async operation second");
}, 2000);
console.log("async operation third");
