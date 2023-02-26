*For core concepts see* [[1 - Web Dev/React Core Concepts]]


A refresher for intermediate React engineers.
- [React for beginners](#react-for-beginners)
  - [Props](#props)
    - [What are props?](#what-are-props)
  - [Stateless Functional Components](#stateless-functional-components)
  - [Helper functions](#helper-functions)
  - [Events and Refs](#events-and-refs)
  - [Handling Events](#handling-events)
- [State](#state)


## Props

### What are props?
- Way to get data from component to component
  - *State*: The home
  - *Props* a bus to get your state from component to component
  - Props -> object of data that got passed into a component [[1 - Web Dev/object properties]]

```jsx
class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
        {/* tagline is the prop */}
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}
```

```jsx
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
     {/* here we are passing the data/props into the Header component */}
      <span>{props.tagline}</span>
    </h3>
  </header>
);
```

## Stateless Functional Components

- These were used as *[presentational components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)* before hooks
- They basically rendered html to the page without state so there was no need to create a class component

```jsx
// Presentational component
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
     {/* functions have no `this` */}
      <span>{props.tagline}</span>
    </h3>
  </header>
);
```

## Helper functions

- little functions like counting money, etc that are not specific to React but are just plain JavaScript functions.
- Difference between `export default` and named export
  - named export:

```jsx
export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
```
- importing a named value:

`import { rando } from '../helpers.js`
- importing a default value:

`import React from 'react'`

- values of inputs *must always be attached to state*.
- For default text use `defaultValue={rando()}`
  - when the component is mounted to the page the default text will render inside the input

## Events and Refs

- Synthetic events work across browsers
- Events are done inline:

```js
handleSubmit(e) {
  e.preventDefault();
  console.log('Going to store')
}
<button onClick={this.handleSubmit}>Click Me</button>
```

- Adding parens to `handleSubmit` would run the method when the component mounts (page load)
- How to get text from input?
  - Cannot touch DOM
- Getting text from input: `ref` or syncing stuff from state
- Ref: reference a DOM node on the page:

```jsx
class StorePicker extends React.Component {
  myInput = React.createRef();

  handleSubmit(e) {
   e.preventDefault();
   console.log('Going to store')
  }
  render(){
    return (
      <form className="some-class" onSubmit={this.handleSubmit}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={rando()}
        >
      </form>
    )
  }
}
```
- `this` in a React components refers to *that exact component*
- Built in methods built on `React.Component`
  - Extended components not bound by default
  - Can use `componentDidMount()` or use `this.handleSubmit.bind()`

```jsx
class StorePicker extends React.Component {
  constructor() {
    super();
    {/* will bind `this` to this exact component */}
    this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
   e.preventDefault();
   console.log('Going to store')
  }
  render(){
    return (
      <form className="some-class" onSubmit={this.handleSubmit}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={rando()}
        >
      </form>
    )
  }
}
```
- To access `this` inside a method use `bind(this)`
- Create method with arrow function to avoid needing a constructor

## Handling Events
- `this.myInput.value.value` to grab events

# State
- What is state
  - object that holds data that it needs and its children need
  - Just update the data/state and let React do the rest






https://news.ycombinator.com/item?id=31088065