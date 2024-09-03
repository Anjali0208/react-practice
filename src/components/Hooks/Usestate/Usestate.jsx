import React, { useState } from 'react'

export default function Usestate() {

  const [count, setCount] = useState(0);

  // count [state, setState] = useState()
  // state = dyamic variable
  // setState()

  const handleCount = () => {
    setCount(count + 1)
  }


  return (
    <div>
      <h1>Use State Hook</h1>
      <h3>Count: {count}</h3>
      {/* <button onClick={handleAdd}>Add</button> */}
      <button onClick={handleCount}>subtract</button>
      <button onClick={handleCount}>reset</button>


    </div>
  )
}



