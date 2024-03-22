// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Store/Slices/couterSlice';

const Counter = () => {
  const dispatch=useDispatch();
   const count =  useSelector(store=>store.couterState.count);
    
   const handleInc =()=>{
      // console.log("inc")
      dispatch(increment())
    }
    const handleDec=()=>{
      // console.log("dec")
      dispatch(decrement())
    }
  
    return (
    <div>
        Counter -- {count} $
        <button onClick={handleInc}> inc</button>    
        <button onClick={handleDec}> dec</button>    
    </div>
  )
}

export default Counter