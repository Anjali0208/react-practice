import React, { useEffect, useState } from 'react'

export default function Useeffect() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0)


  useEffect(() => {

    console.log('count')
    console.log('color')
  })



  const handleColor = () => {
    setColor(color + 1)
  }
  // everytime I click on click Me button the useEffect will run and the console.log also
  // prints in the console

  const handleCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>Use Effect Hook without any dependecy array</h1>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Click Me</button>
      <h3>Color:{color}</h3>
      <button onClick={handleColor}>Color count </button>

    </div>
  )
}
