import React, { useEffect, useState } from 'react'

function Useeffect2() {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("useEffect called once only")
  }, [])


  return (
    <>
      <h1>Use Effect with empty dependecy array []</h1>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>Click Me</button>

    </>
  )
}

export default Useeffect2