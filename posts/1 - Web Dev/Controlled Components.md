JS function that:
- handles submission of the form *and*
- has access to the data the user entered

How do we get React to know the value of the form immediately upon update?

`handleChange()`

When a user types into an input it updates on each keystroke.

**Example**

```js
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props) 
    this.state = { username: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({ username: e.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    alert('you typed `${this.state.username}`);
    this.setState({ username: ''});
  }

  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
          type='text'
          value={this.state.username} 
          onChange={this.handleChange}> />
        </form>
      </div>
    );
  }
}

export default Form;
```

We can handle [[1 - Web Dev/Multiple Form Inputs]] by giving each input a `name` prop.


