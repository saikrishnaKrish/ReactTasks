import React, { createContext, useContext, useReducer } from 'react';

// Create a context for managing the count state
const CounterContext = createContext();

// Define the initial state and reducer function
const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'SETSTEP':
      return { count: Number(action.payload.stepValue) + state.count };
    default:
      return state;
  }
};

// Create a custom hook to use the counter context
const useCounter = () => {
  return useContext(CounterContext);
};

// Counter component using context API
const CounterComponentWithContext = () => {
  const { state, dispatch } = useCounter();

  const handleIncrement = () => dispatch({ type: 'INCREMENT' });
  const handleDecrement = () => dispatch({ type: 'DECREMENT' });
  const handleInputChange = (stepValue) => dispatch({ type: 'SETSTEP', payload: { stepValue } });

  return (
    <div>
      CounterComponent
      <h1>Count: {state.count}</h1>
      <br />
      <input type={"number"} onChange={(e) => handleInputChange(e.target.value)} />
      <br />
      <button onClick={handleIncrement}>
        Increment (+)
      </button>
      <button onClick={handleDecrement}>
        Decrement (-)
      </button>
    </div>
  );
};

// Context provider component
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, useCounter, CounterComponentWithContext };
