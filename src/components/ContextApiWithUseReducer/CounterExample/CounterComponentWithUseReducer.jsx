import { useReducer } from 'react'

const CounterComponentWithUseReducer = () => {
    const initialState = {
         count:0
    }

    const reducer=(state,action)=>{
        switch(action.type){
            case 'INCREMENT':return {count:state.count+1};
            case 'DECREMENT':return {count:state.count-1};
            case 'SETSTEP': return { count: Number(action.payload.stepValue)+state.count}
            default: state ;
       }
    }
    
    const [state,dispatch]=useReducer(reducer,initialState);

    const handleIncrement =()=>dispatch({type:'INCREMENT'})
    const handleDecrement =()=>dispatch({type:'DECREMENT'})
    const handleInputChange = (stepValue)=>dispatch({type:'SETSTEP',payload:{stepValue}})
    const count=state.count;
  return (
    <div>
        CounterComponent 
       <h1>  Count: {count} </h1> 
       <br/>
        <input type={"number"} onChange={(e)=>handleInputChange(e.target.value)} />
       <br/>
        <button onClick={handleIncrement}>
        Increment (+)
        </button>
        <button onClick={handleDecrement}>
        Decrement (-)
        </button>
        
    </div>

  )
}

export default CounterComponentWithUseReducer