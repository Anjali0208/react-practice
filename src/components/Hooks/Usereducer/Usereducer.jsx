import React, { useReducer } from 'react';

const initialState = 0
// const intialState = {count:0}    => can be used like this but also change state to {count=state.count + 1} everywhere then
 // The reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
     return [...state]
  }
}

const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

// state contains intialState i.e, initial value
// and reducer is a function in which we define condition 
// dispatch is a function which is used to update the state
  return (
    <div>
        <h1 className='mt-4'>Using UseReducer</h1>
     <h3>Count: {state}</h3> 
       <br />
       <br/>
       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
       <button onClick={() => dispatch({ type: 'decrement'})}>Decrement</button>
       <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
    </div>
  );
};

export default Usereducer;