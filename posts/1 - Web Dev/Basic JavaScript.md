# Basic JavaScript

**Keywords**
`const` vs `let`:

const: can't reassign the variable but is mutable
let: can reassign, block scoped

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

## Closures, `for` loops, var, & Hoisting


### Closures

  
```js
// this is a pure function as it only returns the values of its inputs

function pureFun(a, b) {
  return a + b;
}

```

  

When we have a variable outside of a functions scope, we have a free varible we create a closure to store them in a place in memory we can access later in heap memory which keeps memory longer than in the call stack.

  

```js
let b = 3;

// This function is impure as it is referencing a variable outside of its scope. It is also a closure for the same reason.

// This prevents data leakage by keeping the state inside the function to prevent leakage to the surrounding environment.

function impureFun(a) {
  return a + b
}

```

  

Closure: function combined with its outer state or lexical environment. We use this for data encapsulation.

  
  

> What does this code log out?

  

```js
for (var i = 0; i < 3; i++ ) {
const log = () => {
   console.log(i);
 }
  setTimeout(log, 100);
}

```