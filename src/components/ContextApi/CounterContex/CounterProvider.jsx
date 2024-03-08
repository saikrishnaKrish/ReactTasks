import { useContext, useState } from 'react'
import CounterContext from './CounterContext'

const CounterProvider = ({children}) => {

    const [count,setCount]=useState(1);
    const [step,setStep]=useState(10);

    const handleIncrement = ()=>{
      
        setCount((prevCount)=>prevCount+step);
    }
    const handleDecrement = ()=>setCount((prevCount)=>prevCount-step);
    
    const setStepValue=(value)=>setStep(value)

  return (<CounterContext.Provider value={{count,step,handleDecrement,handleIncrement,setStepValue}}>
            {children} 
        </CounterContext.Provider>
    
  )
}


const useCounter=()=>{
    const context =  useContext(CounterContext);
    if(!context){
        throw new Error('use Context must be used within the CounterProvider')
    }
    return context
}

export {CounterProvider,useCounter}