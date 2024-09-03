import React, { useEffect, useState } from 'react'

function Useeffect3() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }
    const handleColor = () => {
        setColor(color + 1)
    }


    useEffect(() => {
        console.log("useEffect called while clicking on click me button")
    }, [count])

    return (
        <>
            <h1>Use Effect with dependency array with value</h1>
            <h3>Count: {count}</h3>
            <button onClick={handleClick}>Click Me</button>
            <h3>Color:{color}</h3>
            <button onClick={handleColor}>Color count </button>
        </>
    )
}

export default Useeffect3