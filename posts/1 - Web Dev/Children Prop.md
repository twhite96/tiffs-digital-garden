Take some content, wrap it in a component that has a style or whatever you want, and in the wrapper component, pass in `this.props.children`. This will pass down any styles or JavaScript that you want into the child components.

ex:

```jsx
  class VendingMachine extends React.Component {
    render() {
      return (
        <div
          className='VendingMachine'
          style={{ backgroundImage: 'url(https://media.giphy.com/media/13borq7Zo2kulO/giphy.gif)' }}
        >
        <Message>
          <h1>hello i am a vending machine. what would you like to eat?</h1>
        </Message>
        <Message>
          <Link to='/soda'>Soda</Link>
          <Link to='/chips'>Chips</Link>
          <Link to='/sardines'>Sardines</Link>
        </Message>
        </div>
      )
    }
  }
```

Then we can make a `Message` Component and pass in the children prop to apply some global styles to the content within the `Message` components in the `VendingMachine`. 

```jsx
  class Message extends React.Component {
    render() {
      // this prop will apply styles in a Message.css 
      // file to all the children
      // in each Message component
      // in the VendingMachine
      return <div className='Message'>{this.props.children}></div>
    }
  }
  ```