```js
// Since React class components are just objects, we can use the `extends`
// keyword to make our component a child of the React base class
class App extends React.Component {
  // We can create and initialize our App object on the React base class
  // by using the constructor method
  constructor(props) {
    super(props);
    this.someFunction = this.someFunction.bind(this);
  }
}
```

## Types of components

One of the most commont types of components you'll see are [[1 - Web Dev/React Forms]].


