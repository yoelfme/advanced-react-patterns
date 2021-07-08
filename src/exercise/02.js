// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({ children }) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, (child, index) => {
    // if (typeof child.type  === 'function') {
    if (allowedTypes.includes(child.type)) {
      return React.cloneElement(child, { on, toggle })
    }

    return child
  })
}

const ToggleOn = ({ on, children }) => on ? children : null

const ToggleOff = ({ on, children }) => !on ? children : null

const ToggleCustomLabel = ({ on, children }) => on ? 'se prendio' : 'se apago'

const ToggleButton = ({ on, toggle }) => <Switch on={on} onClick={toggle} />

const allowedTypes = [ToggleOff, ToggleOn, ToggleButton,]

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
        <ToggleCustomLabel></ToggleCustomLabel>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
