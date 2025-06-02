### JavaScript Questions

#### Q. Explain hoisting in JS?

**Understanding the Execution Context**  
When a JavaScript program runs, a global execution context is created. This context consists of two phases:

**a) Memory Creation Phase**
- Variable declarations are scanned and allocated memory, initialized with the value `undefined`
- Function declarations are scanned and stored in memory with their entire code

**b) Code Execution Phase**
- The code is executed line by line

**What is Hoisting?**  
Hoisting is not about physically moving code to the top, but rather about how JavaScript allocates memory for variables and functions during the memory creation phase of the execution context.
Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.
 
**Key Behaviors**
- This mechanism allows for certain behaviors like using functions before they appear in the code, but it's crucial to understand that variables are initialized as `undefined` until they're assigned a value during code execution.
- **Function declarations:** You can call a function before its declaration in the code because the entire function is available in memory from the start.
- **Variables:** Trying to access a variable before its declaration will result in `undefined`.
- **Function expressions and arrow functions:** Being treated as variables, hence cannot be called before their declaration in the code.

**How It Works**  
Variable and function declarations are processed before any code is executed. However, only the declarations are processed, not the initializations. This gives the impression that declarations are "moved to the top" of their scope, but it's more accurate to say they're processed early in the execution context's creation.

---

#### Q. Hoisting of let and const

**Key Differences from var**  
- `let` and `const` declarations are hoisted, but they are hoisted very differently from `var` declarations.

**Memory allocation:**
- Memory is assigned to `var` declarations, and `var` declarations are always attached to the global object `window`.
- In case of `let` and `const`, they are allocated memory in some different memory space other than global space known as `"Script"`, and this is what we call hoisting.
- The `let` and `const` declarations are not attached to the global object `window`.
- And this is the reason you cannot access these `let` and `const` variables before you have put some value in them.

**Temporal Dead Zone (TDZ)**  
Temporal dead zone is the time since when `let` & `const` variables were hoisted (set as `"undefined"`) and till it is initialized with some value. The time between these two phenomena is known as the Temporal Dead Zone.  
Whenever you try to access a `let` or `const` variable in the TDZ, it will always give you a reference error.

**Global Scope Behavior**  
- `var` declarations are always attached to the `window` object (in global scope).
- `let` and `const` declarations are **never** attached to the `window` object, as these variables are never stored in the global memory space.

**Strict Rules**  
- `let` and `const` are more strict than `var`.
- Re-declaration of `let` is not allowed in JS and will give a syntax error.

**How to Avoid Temporal Dead Zone?**  
Sometimes the temporal dead zone can mess our code as a developer. The best way to avoid the temporal dead zone is to always put your **declarations and initializations** at the top of the code.  
That way, as soon as your code starts running, it hits the initialization part first and then proceeds to logic, avoiding unexpected errors.

This approach minimizes the TDZ nearly to zero.

**Technical Note**  
JavaScript uses different memory than the global execution context to store `let` and `const`, which is the reason behind the "temporal dead zone".


#### Q. Shortest JS Program, window & this keyword

- The shortest JS program is empty file. Because even then, JS engine does a lot of things. As always, even in this case, it creates the GEC which has memory space and the execution context.

- JS engine creates something known as '**window**'. It is an object, which is created in the global space. It contains lots of functions and variables. These functions and variables can be accessed from anywhere in the program. JS engine also creates a **this** keyword, which points to the **window object** at the global level. So, in summary, along with GEC, a global object (window) and a this variable are created.

- In different engines, the name of global object changes. Window in browsers, but in nodeJS it is called something else. At global level, this === window

- If we create any variable in the global scope, then the variables get attached to the global object.

eg:

```js
var x = 10;
console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10
```

<hr>