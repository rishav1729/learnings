# JavaScript Questions

### Q. Explain hoisting in JS?

#### Understanding the Execution Context
When a JavaScript program runs, a global execution context is created. This context consists of two phases:
- a) Memory Creation Phase
    - **Variable declarations** are scanned and allocated memory, initialized with the value `undefined`
    - **Function declarations** are scanned and stored in memory with their entire code

- b) Code Execution Phase
    - The code is executed line by line

#### What is Hoisting?
Hoisting is not about physically moving code to the top, but rather about how JavaScript allocates memory for variables and functions during the memory creation phase of the execution context.

#### Key Behaviors
This mechanism allows for certain behaviors like using functions before they appear in the code, but it's crucial to understand that variables are initialized as `undefined` until they're assigned a value during code execution.

- **Function declarations**: You can call a function before its declaration in the code because the entire function is available in memory from the start
- **Variables**: Trying to access a variable before its declaration will result in `undefined`
- **Function expressions and arrow functions**: Being treated as variables, hence cannot be called before their declaration in the code

#### How It Works

Variable and function declarations are processed before any code is executed. However, only the declarations are processed, not the initializations. This gives the impression that declarations are "moved to the top" of their scope, but it's more accurate to say they're processed early in the execution context's creation.

### Q. Hoisting of let and const

#### Key Differences from var

1. **`let` and `const` declarations are hoisted**, but they are hoisted very differently from the `var` declarations.

2. **Memory allocation**:
   - Memory is assigned to `var` declarations, and `var` declarations are always attached to the global object `window`
   - In case of `let` and `const`, they are allocated memory in some different memory space other than global space known as "Script", and this is what we call hoisting
   - The `let` and `const` declarations are not attached to the global object `window`
   - And this is the reason you cannot access these `let` and `const` variables before you have put some value in them

#### Temporal Dead Zone (TDZ)

3. **Temporal dead zone** is the time since when `let` & `const` variables were hoisted (set as "undefined") and till it is initialized with some value, the time between these two phenomena's is known as the Temporal Dead Zone. Whenever you try to access a `let` or `const` variable in the temporal dead zone, then it will always give you reference error.

#### Global Scope Behavior

4. `var` declarations are always attached to the window object, provided they've been declared in the global scope. `let` and `const` declarations are never attached to the window object, as these variables are never stored in the global memory space.

#### Strict Rules

5. `let` and `const` are more strict than `var`. Re-declaration of `let` is not allowed in JS. The JS engine will give a syntax error, it is not allowed in the same scope.

#### How to Avoid Temporal Dead Zone?

6. Sometimes the temporal dead zone can mess our code as a developer. The best way to avoid the temporal dead zone is to **always put your declarations and initializations on the top of the code**. So, that as soon as your code starts running, it hits the initialization part at the first, and then you go into the logic, and then you do something with these variables. Otherwise, you'll run into unexpected errors in your code.

   This way we're shrinking the temporal dead zone nearly to zero. We've minimized the TDZ nearly to zero, while moving all the initializations at the top, so that nothing happens before these initializations.

#### Technical Note

JavaScript uses different memory than global execution context to store `let` and `const`, which is the reason behind "temporal dead zone".