// Think of a promise like its real-world counterpart: a commitment that something will be done in the future. You're not sure exactly when it will be done, or if it will even be successful, but you have a guarantee that you'll be notified once the outcome is known.

// In JavaScript, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in one of three states:   

// Pending: This is the initial state, neither fulfilled nor rejected. The operation hasn't completed yet.
// Fulfilled (Resolved): This means the asynchronous operation completed successfully, and the promise has a resulting value.
// Rejected: This means the asynchronous operation failed, and the promise has a reason for the failure (often an error).
// Let's break down how you work with promises:

// Creating a Promise:

// You create a promise using the Promise constructor, which takes a function called the "executor." This executor function itself takes two arguments: resolve and reject. These are functions provided by JavaScript.

// JavaScript

const myPromise = new Promise((resolve, reject) => {
  // Perform an asynchronous operation here (e.g., setTimeout, fetch)
  setTimeout(() => {
    const success = true; // Simulate a successful or failed operation
    if (success) {
      resolve("Data fetched successfully!"); // Call resolve with the result if successful
    } else {
      reject("Failed to fetch data."); // Call reject with the error if it fails
    }
  }, 2000); // Simulate a 2-second delay
});
// In this example:

// We create a new Promise.
// The executor function is the arrow function (resolve, reject) => { ... }.
// Inside the setTimeout, we simulate an asynchronous operation.
// If success is true, we call resolve() with the data we want to pass on. This moves the promise to the "fulfilled" state.
// If success is false, we call reject() with an error message. This moves the promise to the "rejected" state.
// Handling Promise Outcomes (.then() and .catch()):

// Once a promise is created, you can use the .then() and .catch() methods to handle its eventual outcome.

// .then(onFulfilled, onRejected (optional)): This method takes up to two callback functions.

// onFulfilled: This function is executed if the promise is fulfilled. It receives the resolved value as its argument.
// onRejected (optional): This function is executed if the promise is rejected. It receives the rejection reason as its argument.
// .catch(onRejected): This method is a shorthand for .then(null, onRejected). It's specifically designed to handle rejections.

// Here's how you'd use them with our myPromise:

// JavaScript

myPromise
  .then((result) => {
    console.log("Success:", result); // This will run if resolve() was called
  })
  .catch((error) => {
    console.error("Error:", error); // This will run if reject() was called
  });

console.log("Promise initiated..."); // This will run before the promise resolves or rejects
// Promise Chaining:

// A powerful feature of promises is the ability to chain them. When you return a value (or another promise) from a .then() handler, it's automatically wrapped in a new promise. This allows you to perform a sequence of asynchronous operations where the result of one depends on the previous one.

// JavaScript

function fetchData(url) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
      const data = `Data from ${url}`;
      resolve(data);
    }, 1500);
  });
}

fetchData("api/data1")
  .then((data1) => {
    console.log("First data:", data1);
    return fetchData("api/data2"); // Return another promise
  })
  .then((data2) => {
    console.log("Second data:", data2);
    return "All data processed!";
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
// In this chain:

// fetchData("api/data1") is called, and its promise resolves with data1.
// The first .then() receives data1, logs it, and then returns another promise by calling fetchData("api/data2").
// The second .then() waits for the promise returned in the previous step to resolve. It receives data2, logs it, and returns a simple string.
// The final .then() receives the string "All data processed!".
// If any of the promises in the chain reject, the .catch() at the end will handle the error.
// Promise.all() and Promise.race():

// JavaScript also provides static methods on the Promise object for handling multiple promises concurrently:

// Promise.all(promises): Takes an array of promises and returns a new promise that fulfills when all of the input promises have fulfilled. The fulfillment value is an array containing the fulfillment values of the input promises in order. If any of the input promises reject, the promise returned by Promise.all() immediately rejects with the reason of the first promise that rejected.   

// JavaScript

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve("foo"), 200));
const promise3 = 42; // Non-promise values are treated as resolved promises

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("All resolved:", values); // Output: All resolved: [ 3, 'foo', 42 ]
  })
  .catch((error) => {
    console.error("Something rejected:", error);
  });
// Promise.race(promises): Takes an array of promises and returns a new promise that settles (either fulfills or rejects) as soon as the first of the input promises settles.

// JavaScript

const promiseA = new Promise((resolve) => setTimeout(() => resolve("A won!"), 500));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("B won!"), 300));

Promise.race([promiseA, promiseB])
  .then((value) => {
    console.log("First to settle:", value); // Output: First to settle: B won!
  });
// Async/Await (Syntactic Sugar):

// While .then() and .catch() are fundamental, the async and await keywords provide a more synchronous-looking way to work with promises, making asynchronous code easier to read and write. Under the hood, they still use promises.

// async: When you declare a function with the async keyword, it implicitly returns a promise. If the function returns a value, that value is wrapped in a resolved promise. If the function throws an error, that error is wrapped in a rejected promise.   

// await: The await keyword can only be used inside an async function. It pauses the execution of the async function until the promise it's waiting for settles (either resolves or rejects).   

// If the promise resolves, await returns the resolved value.
// If the promise rejects, await throws the rejection reason (which you can catch using a try...catch block).
// Here's our fetchData example rewritten using async/await:

// JavaScript

async function fetchDataAndProcess() {
  try {
    const data1 = await fetchData("api/data1");
    console.log("First data (async/await):", data1);
    const data2 = await fetchData("api/data2");
    console.log("Second data (async/await):", data2);
    const finalResult = "All data processed (async/await)!";
    console.log(finalResult);
  } catch (error) {
    console.error("An error occurred (async/await):", error);
  }
}

fetchDataAndProcess();
// This async/await syntax often makes asynchronous code flow more linearly and resemble synchronous code, which can improve readability.

// In summary, promises are a powerful tool in JavaScript for managing asynchronous operations, providing a cleaner and more structured way to handle the eventual success or failure of these operations compared to traditional callback-based approaches. They are essential for modern JavaScript development, especially when dealing with network requests, file operations, and other time-consuming tasks.