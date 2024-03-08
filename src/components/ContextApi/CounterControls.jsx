import  { useRef, useState } from 'react'
import { useCounter } from './CounterContex/CounterProvider'

const CounterControls = () => {
    const {handleIncrement,handleDecrement,setStepValue} =useCounter();
    const [inputValue,setInputValue] =useState(1);
    const inputRef =useRef(1);
    const handleInputValue=()=>{
        console.log(inputRef.current.value)
        if (inputRef.current && inputRef.current.value !== '') {
            const value = Number(inputRef.current.value);
            setStepValue(value);
        }
        
    }

  return (
    <div>
        <input type='number' ref={inputRef} value={inputValue} 
            onChange={(e)=>setInputValue(e.target.value)}
        placeholder='Enter a value'/>
        <button onClick={handleInputValue}>Set Step</button>
        <div>
            <button onClick={handleIncrement}> Increment (+) </button>
            <button onClick={handleDecrement}> Decrement (-) </button>
        </div>
    </div>
  )
}

export default CounterControls