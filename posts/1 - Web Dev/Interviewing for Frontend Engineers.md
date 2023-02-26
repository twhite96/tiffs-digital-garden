- [[#Inital phone screen|Inital phone screen]]
- [[#Coding without a computer|Coding without a computer]]
- [[#Before you apply|Before you apply]]
- [[#Resume|Resume]]
- [[#Experience|Experience]]
- [[#To prepare|To prepare]]
- [[#Prescreen|Prescreen]]
- [[#Code test|Code test]]
- [[#Big-O|Big-O]]
	- [[#Big-O#Big Theta|Big Theta]]
	- [[#Big-O#Big Omega|Big Omega]]
- [[#Phone screen|Phone screen]]
	- [[#Phone screen#Phone screen problems|Phone screen problems]]
- [[#On-site interviews|On-site interviews]]
	- [[#On-site interviews#On-site questions|On-site questions]]
- [[#Arrays|Arrays]]



## Inital phone screen
- Prepping for phone screens
  - What do you do
  - Recent projects
  - Looking for in next role
  - Why do you want to work for company
  - What is your availability
- Give interviewers a reason to hire you
- Know these questions
- Write down answers to these questions
- Do your research

## Coding without a computer
- Use iPad to code a few algorithms
- Setup whiteboard again
- Talk out the problem

## Before you apply
- Current job satisfaction
- What the next place offers, apply with intentionality
  - Engineering culture
  - What would make you happy
  
## Resume
- One page
  - Title
  - Current role
  - Education
  - Certs
  - Projects
- Think empathy
- What will jump out to interviewer quickly

## Experience
- Do you need GitHub?
- Post code in CodePen or Codesandbox and share to Twitter
- Network
  - Go to conferences
  - Meetups
- You **will** be paid lowly when you have very little experience
- Have personal projects
  - Have a LinkedIn
  - Have a portfolio

## To prepare
- How many steps are in the interview
- How big is the engineering team
- Which team
- What is your culture like
- Who are your competitors
- What sort of projects would I work on

## Prescreen
- difference between const let var
  - The scope is global when a var variable is declared outside a function.
  - var is function scoped when it is declared within a function. 
  - This means that we can do this within the same scope and won't get an error:
  
  ```js
  var greeter = "hey hi";
  var greeter = "say Hello instead";
  
  var greeter = "hey hi";
  greeter = "say Hello instead";
  ```
  
- var variables can be re-declared and updated
Hoisting of var
- var variables are hoisted to the top of their scope and initialized with a value of undefined.
- What is hoisting?
  - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
- let can be updated but not re-declared.
- let declarations are hoisted to the top.
- let is not initialized
  - try to use a let variable before declaration get a Reference Error
- const cannot be updated or re-declared
- const object cannot be updated
  - properties of objects can be updatedconst object as this:
  - cannot do this:

```js
const greeting = {
  words: "Hello",
  number: "five"
}
```
  - can do this: 

`greeting.message = "say Hello instead";`
- const declarations are hoisted to the top but are not initialized
- Explain prototypical inheritance
  - A prototype is a working object instance. Objects inherit directly from other objects.
- What is `this`
  - The scope you're in but if it is not locally defined, `this` refers to the global object
- What is the data structure of the DOM
  - The DOM is a tree
- What is a stack and a queue?
  - Data structures
  - stack
    - Last in first out
    - use an array `pop()`, `push()`
  - queue
    - first in first out
  - Image loaded on page
    - `onLoad` callback will be fired
  - What is `call()` and `apply()`
    - Ways of changing the scope of the calling function
      - call: series of arguments
      - apply: array of arguments
  - Event delegation
    - Have one event listener at the top when you click it bubbles up to the parent
    - Event listeners are expensive (performance)
  - What is a worker
    - Worker is a thing in a browser to offload an expensive operation

## Code test
- Make code readable
  - comment
  - don't overcomplicate the architecture
- don't import too many libs
  - use something like lodash
- If more time add unit tests
- Ask questions
  - Ask questions ahead of time

## Big-O
- how long a function will take to run in a worst case scenario

### Big Theta
- The average case for how long a function will take to run
```js
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      return true;
    }
  }
  return false;
}
```
### Big Omega
- The best case scenario for how long a function will take to run

```js
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      return true;
    }
  }
  return false;
}
```

- 1 for loop, return early
  - element at index 0 is best case
  - will return instantly
  - size of inputs doesn't matter

💡Tip:
> Big-O, count the loops

## Phone screen
- Ask questions
  - not too many
- talk out your solution
  - especially if stuck
    - need to let interviewer know how you're thinking
- get comfortable with environment




### Phone screen problems


<iframe src="https://codepen.io/jemyoung/embed/wvvpGRx?default-tab=js,result&amp;editable=true&amp;theme-id=22729" allow="fullscreen" style="height: 100%; width: 100%; aspect-ratio: 4 / 3;"></iframe>


- `createDocumentFragment()` for appending more than once
  - constantly rendering to the DOM with multiple `appendChild()` has perfomance implications

- extracting the `target` event from the DOM and using `childNodeRemove` is [[1 - Web Dev/Event Delegation]]

## On-site interviews

- [[#On-site questions|On-site questions]]
- [[#Arrays|Arrays]]


- practice coding without a computer/iPad
- Go over general sample problems
- Ask other engineers/friends to test you
- Ask about style of technical questions

### On-site questions
- Interesting facts about strings: Immutable
  - Should convert strings into arrays

```js
function reverse(str) {
  return str.split('').reverse().join();
}
```
## Arrays

- `Object.entries()`
  - gives an array of arrays index 0 first item in the array
- `Array.from()`
  - Takes an array like object (arguments)
  - HTML children
- `[...item]`
  - Spreads items into an array


> [!INFO]
> See also: [[1 - Web Dev/Basic Data Structures and Algorithms]]
