import { createContext, useState } from "react";

export const CounterContext = createContext()

export const CounterProvider = (props) => {
    const [count, setCount] = useState(2)
    return <CounterContext.Provider value={{ count, setCount }}>
        {props.children}
    </CounterContext.Provider>
}