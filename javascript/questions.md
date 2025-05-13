# JavaScript Questions

## Q. Explain hoisting in JS?

### Understanding the Execution Context

When a JavaScript program runs, a global execution context is created. This context consists of two phases:

#### a) Memory Creation Phase

- **Variable declarations** are scanned and allocated memory, initialized with the value `undefined`
- **Function declarations** are scanned and stored in memory with their entire code

#### b) Code Execution Phase

- The code is executed line by line

### What is Hoisting?

Hoisting is not about physically moving code to the top, but rather about how JavaScript allocates memory for variables and functions during the memory creation phase of the execution context.

### Key Behaviors

This mechanism allows for certain behaviors like using functions before they appear in the code, but it's crucial to understand that variables are initialized as `undefined` until they're assigned a value during code execution.

- **Function declarations**: You can call a function before its declaration in the code because the entire function is available in memory from the start
- **Variables**: Trying to access a variable before its declaration will result in `undefined`
- **Function expressions and arrow functions**: Being treated as variables, hence cannot be called before their declaration in the code

### How It Works

Variable and function declarations are processed before any code is executed. However, only the declarations are processed, not the initializations. This gives the impression that declarations are "moved to the top" of their scope, but it's more accurate to say they're processed early in the execution context's creation.