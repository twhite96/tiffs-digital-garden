*Must use `name` prop and make sure that the `name` prop matches the what we're putting in state*.

```js
class Form extends React.Component {
  constructor(props) {
    super(props) 
    this.state = { username: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
            name='username
            value={this.state.username} 
            onChange={this.handleChange}> />
          <input 
            type='email'
            name='email
            value={this.state.email} 
            onChange={this.handleChange}> />
          <input 
            type='password'
            name='password'
            value={this.state.password} 
            onChange={this.handleChange}> />
        </form>
      </div>
    );
  }
}

export default Form;
```