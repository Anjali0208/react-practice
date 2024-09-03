import React, { useContext } from 'react'
import { CounterContext } from '../../../context/CounterContext'


function Counter() {
    const counterCon = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => counterCon.setCount(counterCon.count + 1)}>Increment</button>
            <button onClick={() => counterCon.setCount(counterCon.count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter