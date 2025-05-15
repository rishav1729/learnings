// ===== JAVASCRIPT CLOSURES: A COMPLETE GUIDE =====
// A Closure is formed when an inner function has access to variables from its outer (enclosing) function's scope

// ===== 1. BASIC CLOSURE EXAMPLE =====
function outerFunction(x) {
    // This is the outer function's scope
    const outerVariable = x;
    
    // Inner function has access to outer function's variables
    function innerFunction(y) {
        // The inner function "closes over" the outer variable
        return outerVariable + y;
    }
    
    return innerFunction;
}

// const myClosure = outerFunction(10);
// console.log("Basic closure:", myClosure(5)); // Output: 15

// ===== HOW CLOSURE WORKS HERE =====
/*
1. outerFunction creates a local variable 'outerVariable' and an inner function 'innerFunction'
2. innerFunction references 'outerVariable' from its outer scope
3. When outerFunction returns innerFunction, it creates a closure
4. The closure maintains a reference to 'outerVariable' even after outerFunction finishes
5. When we call myClosure(5), it still has access to 'outerVariable' (which is 10)
6. This allows the inner function to compute 10 + 5 = 15
*/

// ===== 2. CLOSURE WITH MULTIPLE VARIABLES =====
function createMultiplier(multiplier) {
    const name = "Multiplier";
    let count = 0;
    
    return function(number) {
        count++; // Can modify variables from outer scope
        console.log(`${name} #${count}: ${number} × ${multiplier} = ${number * multiplier}`);
        return number * multiplier;
    };
}

const multiplyBy3 = createMultiplier(3);
const multiplyBy5 = createMultiplier(5);

multiplyBy3(4); // "Multiplier #1: 4 × 3 = 12"
multiplyBy3(7); // "Multiplier #2: 7 × 3 = 21"
multiplyBy5(6); // "Multiplier #1: 6 × 5 = 30"

// ===== HOW CLOSURE WORKS HERE =====
/*
1. Each call to createMultiplier() creates a new closure with its own copy of variables
2. multiplyBy3 has its own closure with: multiplier=3, name="Multiplier", count=0
3. multiplyBy5 has its own closure with: multiplier=5, name="Multiplier", count=0
4. Each returned function maintains access to its specific closure environment
5. The 'count' variable persists between calls to the same function
6. multiplyBy3's count is independent from multiplyBy5's count
7. This demonstrates how closures maintain separate state for each function instance
*/

// ===== 3. CLOSURE IN LOOPS (COMMON PITFALL AND SOLUTION) =====
// PROBLEM: All buttons alert the same value (3)
console.log("\n=== Loop Closure Problem ===");

// SOLUTION 1: Using let instead of var
console.log("Solution 1 - Using let:");
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("Button", i); // Prints 0, 1, 2
    }, 100 + i * 10);
}

// SOLUTION 2: Using closure to capture the variable
console.log("Solution 2 - Using closure:");
for (var i = 0; i < 3; i++) {
    (function(index) {
        setTimeout(function() {
            console.log("Button", index); // Prints 0, 1, 2
        }, 200 + index * 10);
    })(i);
}

// ===== HOW CLOSURE WORKS HERE =====
/*
THE PROBLEM (with var):
1. var creates function-scoped variables, not block-scoped
2. setTimeout callbacks are executed after the loop completes
3. All callbacks share the same 'i' variable reference
4. By the time callbacks execute, i = 3 for all of them

SOLUTION 1 (let):
1. let creates block-scoped variables
2. Each iteration creates a new binding for 'i'
3. Each callback captures its own unique 'i' value
4. This is essentially creating a closure for each iteration

SOLUTION 2 (IIFE closure):
1. Immediately Invoked Function Expression (IIFE) creates a new scope
2. Each IIFE call captures the current value of 'i' as parameter 'index'
3. The setTimeout callback forms a closure over 'index'
4. Each callback gets its own copy of the index value
*/

// ===== 4. PRIVATE VARIABLES WITH CLOSURES =====
function createBankAccount(initialBalance) {
    // These variables are private - only accessible through the returned methods
    let balance = initialBalance;
    let transactionHistory = [];
    
    return {
        // These methods form closures with access to private variables
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                transactionHistory.push(`Deposited: $${amount}`);
                return balance;
            }
            return "Invalid amount";
        },
        
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                transactionHistory.push(`Withdrew: $${amount}`);
                return balance;
            }
            return "Insufficient funds or invalid amount";
        },
        
        getBalance: function() {
            return balance;
        },
        
        getHistory: function() {
            return [...transactionHistory]; // Return a copy, not the original
        }
    };
}

const account1 = createBankAccount(100);
console.log("\n=== Bank Account Example ===");
console.log("Initial balance:", account1.getBalance()); // 100
console.log("After deposit:", account1.deposit(50)); // 150
console.log("After withdrawal:", account1.withdraw(30)); // 120
console.log("Transaction history:", account1.getHistory());

// ===== HOW CLOSURE WORKS HERE =====
/*
1. createBankAccount creates local variables 'balance' and 'transactionHistory'
2. It returns an object with methods that form closures over these variables
3. Each method has access to the private variables through closure
4. The private variables persist after createBankAccount finishes executing
5. Outside code cannot directly access 'balance' or 'transactionHistory'
6. This creates true privacy - the only way to interact with the data is through the provided methods
7. Each account instance has its own separate closure with its own private variables
8. This is the foundation of data encapsulation in JavaScript before classes
*/

// ===== 5. CLOSURE WITH EVENT HANDLERS =====
function createButton(name) {
    let clickCount = 0;
    
    return function() {
        clickCount++;
        console.log(`${name} button clicked ${clickCount} times`);
    };
}

const homeButtonHandler = createButton("Home");
const aboutButtonHandler = createButton("About");

// Simulate button clicks
homeButtonHandler(); // "Home button clicked 1 times"
homeButtonHandler(); // "Home button clicked 2 times"
aboutButtonHandler(); // "About button clicked 1 times"

// ===== HOW CLOSURE WORKS HERE =====
/*
1. createButton creates a local variable 'clickCount' for each button
2. The returned function forms a closure over both 'name' and 'clickCount'
3. Each button handler maintains its own separate closure and state
4. When a handler is called, it has persistent access to its specific 'clickCount'
5. This allows each button to maintain its own click count independently
6. The closure keeps the state alive between function calls
7. This pattern is commonly used in event-driven programming
*/

// ===== 6. CLOSURE WITH TIMER/SCHEDULING =====
function createTimer(name) {
    let seconds = 0;
    
    const timer = setInterval(function() {
        seconds++;
        console.log(`${name} timer: ${seconds} seconds`);
        
        if (seconds >= 3) {
            clearInterval(timer);
            console.log(`${name} timer finished`);
        }
    }, 1000);
    
    // Return a function to stop the timer early
    return function() {
        clearInterval(timer);
        console.log(`${name} timer stopped at ${seconds} seconds`);
    };
}

// This will be automatically started
const stopMainTimer = createTimer("Main");

// ===== HOW CLOSURE WORKS HERE =====
/*
1. createTimer creates local variables 'seconds' and 'timer'
2. The setInterval callback forms a closure over 'seconds', 'name', and 'timer'
3. This allows the callback to increment 'seconds' and access 'name' on each execution
4. The returned function also forms a closure over 'timer' and 'seconds'
5. Even after createTimer finishes, the closure keeps all these variables alive
6. This enables the timer to maintain state across multiple setTimeout calls
7. The returned stop function can access the same variables to stop the timer
8. Each timer instance has its own separate closure with independent state
*/

// ===== 7. CLOSURE WITH ASYNC OPERATIONS =====
function createAsyncProcessor(id) {
    let processed = 0;
    
    return async function(data) {
        console.log(`Processor ${id} starting to process data...`);
        
        // Simulate async operation
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        processed++;
        console.log(`Processor ${id} finished processing. Total processed: ${processed}`);
        return `Processor ${id} result: ${data.toUpperCase()}`;
    };
}

// Usage with async/await
async function demonstrateAsync() {
    const processor1 = createAsyncProcessor("A");
    const processor2 = createAsyncProcessor("B");
    
    console.log("\n=== Async Closure Example ===");
    const result1 = await processor1("hello");
    const result2 = await processor1("world");
    const result3 = await processor2("async");
    
    console.log(result1, result2, result3);
}

// ===== HOW CLOSURE WORKS HERE =====
/*
1. createAsyncProcessor creates local variables 'processed' and 'id'
2. The returned async function forms a closure over these variables
3. Even though the function execution is asynchronous, the closure persists
4. Each await call maintains access to the closed-over variables
5. 'processed' is incremented after each async operation completes
6. The closure survives throughout the entire async operation lifecycle
7. Each processor instance has its own closure with independent state
8. This demonstrates how closures work seamlessly with modern async/await patterns
*/

// ===== 8. CLOSURE WITH FACTORY PATTERN =====
function createValidator(rules) {
    // Store rules in closure
    const validationRules = rules;
    let validationCount = 0;
    
    return {
        validate: function(data) {
            validationCount++;
            const errors = [];
            
            for (const [field, rule] of Object.entries(validationRules)) {
                if (!rule.test(data[field])) {
                    errors.push(`${field}: ${rule.message}`);
                }
            }
            
            console.log(`Validation #${validationCount} - ${errors.length === 0 ? 'PASSED' : 'FAILED'}`);
            return errors;
        },
        
        getValidationCount: function() {
            return validationCount;
        }
    };
}

const emailValidator = createValidator({
    email: {
        test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Invalid email format"
    },
    password: {
        test: (value) => value && value.length >= 8,
        message: "Password must be at least 8 characters"
    }
});

console.log("\n=== Validator Example ===");
console.log(emailValidator.validate({ email: "test@example.com", password: "12345678" }));
console.log(emailValidator.validate({ email: "invalid", password: "123" }));
console.log("Total validations:", emailValidator.getValidationCount());

// ===== HOW CLOSURE WORKS HERE =====
/*
1. createValidator captures 'rules' in its closure when called
2. It creates 'validationRules' and 'validationCount' in the closure scope
3. The returned object methods form closures over these variables
4. Each method has persistent access to the validation rules and count
5. 'validationCount' is shared between the validate and getValidationCount methods
6. The closure ensures 'validationRules' remains accessible even after createValidator finishes
7. This creates a factory pattern where each validator has its own rules and state
8. Multiple validators can be created with different rules, each with its own closure
*/

// ===== 9. CLOSURE WITH MEMOIZATION (CACHING) =====
function createMemoizedFunction(fn) {
    const cache = {};
    let cacheHits = 0;
    let cacheMisses = 0;
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            cacheHits++;
            console.log(`Cache hit! Result: ${cache[key]}`);
            return cache[key];
        }
        
        cacheMisses++;
        const result = fn.apply(this, args);
        cache[key] = result;
        console.log(`Cache miss. Calculated result: ${result}`);
        return result;
    };
}

// Example: Memoized fibonacci
function fibonacciSlow(n) {
    if (n <= 1) return n;
    return fibonacciSlow(n - 1) + fibonacciSlow(n - 2);
}

const memoizedFibonacci = createMemoizedFunction(fibonacciSlow);

console.log("\n=== Memoization Example ===");
console.log("Fibonacci(10):", memoizedFibonacci(10));
console.log("Fibonacci(10) again:", memoizedFibonacci(10)); // This will be cached

// ===== HOW CLOSURE WORKS HERE =====
/*
1. createMemoizedFunction creates 'cache', 'cacheHits', and 'cacheMisses' variables
2. The returned function forms a closure over these variables and the original function 'fn'
3. Each call to the memoized function has access to the shared cache object
4. The cache persists between calls due to the closure
5. cacheHits and cacheMisses statistics are maintained across all calls
6. The original function 'fn' is captured in the closure and called when needed
7. This creates a persistent caching mechanism that survives function calls
8. The closure enables the memoization pattern by maintaining state between calls
*/

// ===== 10. CLOSURE WITH MODULE PATTERN =====
const CalcModule = (function() {
    // Private variables and functions
    let result = 0;
    const history = [];
    
    function logOperation(operation, value) {
        history.push(`${operation}: ${value}`);
    }
    
    // Public API
    return {
        add: function(value) {
            result += value;
            logOperation('ADD', value);
            return this; // For method chaining
        },
        
        subtract: function(value) {
            result -= value;
            logOperation('SUBTRACT', value);
            return this;
        },
        
        multiply: function(value) {
            result *= value;
            logOperation('MULTIPLY', value);
            return this;
        },
        
        getResult: function() {
            return result;
        },
        
        getHistory: function() {
            return [...history];
        },
        
        reset: function() {
            result = 0;
            history.length = 0;
            return this;
        }
    };
})();

console.log("\n=== Module Pattern Example ===");
CalcModule.add(10).multiply(2).subtract(5);
console.log("Result:", CalcModule.getResult()); // 15
console.log("History:", CalcModule.getHistory());

// ===== HOW CLOSURE WORKS HERE =====
/*
1. The IIFE (Immediately Invoked Function Expression) creates a new scope
2. Private variables 'result', 'history', and private function 'logOperation' exist in this scope
3. The returned object methods form closures over these private variables
4. These methods have access to the private state even after the IIFE finishes
5. External code cannot directly access 'result' or 'history'
6. All methods share the same closure environment (single instance)
7. This creates a module with private state and public methods
8. The closure enables true privacy in JavaScript before ES6 modules
*/

// ===== 11. CLOSURE WITH PARTIAL APPLICATION =====
function partial(fn, ...presetArgs) {
    return function(...restArgs) {
        return fn.apply(this, [...presetArgs, ...restArgs]);
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const multiplyBy2 = partial(multiply, 2);
const multiplyBy2And3 = partial(multiply, 2, 3);

console.log("\n=== Partial Application Example ===");
console.log("Multiply 2 × 5 × 4:", multiplyBy2(5, 4)); // 40
console.log("Multiply 2 × 3 × 7:", multiplyBy2And3(7)); // 42

// ===== HOW CLOSURE WORKS HERE =====
/*
1. The partial function captures 'fn' and 'presetArgs' in its closure
2. The returned function forms a closure over these captured values
3. When the returned function is called, it has access to the original function and preset arguments
4. The closure preserves the preset arguments until the returned function is invoked
5. This enables creating specialized functions with pre-filled arguments
6. multiplyBy2 has a closure over multiply and [2]
7. multiplyBy2And3 has a closure over multiply and [2, 3]
8. Each partial application creates its own closure with different preset arguments
*/

// ===== 12. CLOSURE MEMORY LEAK PREVENTION =====
function potentialMemoryLeak() {
    const bigData = new Array(1000000).fill('data');
    
    return function smallOperation() {
        // This function doesn't need bigData, but it still holds a reference to it
        return "small result";
    };
}

function memoryEfficient() {
    const bigData = new Array(1000000).fill('data');
    const onlyWhatWeNeed = bigData.length; // Extract only needed information
    
    return function smallOperation() {
        // Now we only reference the small piece of data we actually need
        return `small result (processed ${onlyWhatWeNeed} items)`;
    };
}

console.log("\n=== Memory Management Example ===");
console.log("Memory efficient version:", memoryEfficient()());

// ===== HOW CLOSURE WORKS HERE =====
/*
POTENTIAL MEMORY LEAK:
1. The inner function forms a closure that captures all of the outer function's scope
2. Even though 'bigData' is not used, the closure maintains a reference to it
3. This prevents 'bigData' from being garbage collected
4. The entire large array stays in memory as long as the closure exists

MEMORY EFFICIENT APPROACH:
1. We extract only the necessary information (bigData.length) before creating the closure
2. The inner function only closes over 'onlyWhatWeNeed', not the entire 'bigData'
3. JavaScript can garbage collect 'bigData' after the outer function finishes
4. This demonstrates how to prevent unintended memory leaks in closures
5. The closure still works correctly but with minimal memory footprint
*/

// ===== SUMMARY AND KEY POINTS =====
console.log("\n=== KEY POINTS ABOUT CLOSURES ===");
console.log("1. Closures give inner functions access to outer function's variables");
console.log("2. The outer function's variables persist even after it finishes executing");
console.log("3. Each closure has its own copy of the outer function's variables");
console.log("4. Closures are useful for creating private variables and methods");
console.log("5. Common use cases: callbacks, event handlers, timers, modules, and factory patterns");
console.log("6. Be careful with closures in loops - use let or create explicit closures");
console.log("7. Watch out for memory leaks when closures hold references to large objects");
console.log("8. Closures enable powerful patterns like memoization and partial application");

// ===== BONUS: CLOSURE SCOPE CHAIN VISUALIZATION =====
function level1() {
    const level1Var = "Level 1";
    
    function level2() {
        const level2Var = "Level 2";
        
        function level3() {
            const level3Var = "Level 3";
            
            // This function has access to all levels due to closure
            console.log("\n=== Scope Chain ===");
            console.log("Level 3 var:", level3Var);
            console.log("Level 2 var:", level2Var);
            console.log("Level 1 var:", level1Var);
            // console.log("Global var:", globalVar); // Would work if globalVar existed
        }
        
        return level3;
    }
    
    return level2;
}

const deepClosure = level1()();
deepClosure();

// ===== HOW CLOSURE WORKS HERE =====
/*
1. level3 function has access to variables from all outer scopes (closure scope chain)
2. It creates closures over level3Var (own scope), level2Var, and level1Var
3. Each function maintains references to all variables in its lexical scope chain
4. When level3 is finally executed, it can access all these variables
5. This demonstrates the concept of lexical scoping and closure scope chain
6. Variables are resolved from the innermost scope to the outermost scope
7. This is how JavaScript implements the scope chain using closures
*/