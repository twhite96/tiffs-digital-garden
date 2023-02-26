```js
function Toggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(o => !o)
  return <Switch on={on} onToggle={toggle} />
}
function Switch({on, onToggle}) {
  return (
    <div>
      <SwitchMessage on={on} />
      <SwitchButton onToggle={onToggle} />
    </div>
  )
}
function SwitchMessage({on}) {
  return <div>The button is {on ? 'on' : 'off'}</div>
}
function SwitchButton({onToggle}) {
  return <button onClick={onToggle}>Toggle</button>
}
```
> This is [[1 - Web Dev/Prop Drilling]]. To get the on state and toggle handler to the right places, we have to drill (or thread) props through the Switch component. The Switch component itself doesn't actually need those values to function, but we have to accept and forward those props because its children need them.

**Source**: [[[Prop Drilling]] by Kent C Dodds](https://kentcdodds.com/blog/prop-drilling#what-is-prop-drilling)