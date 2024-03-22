// ReduxCounter.js
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, handleDec, handleInc } from "../Store/actions";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state);
  // console.log(data)
  const count = useSelector(state=>state.amount)
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    console.log("first")
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleIncrement=()=>{
    dispatch((handleInc()))
 
  } 
  const handleDecrement=()=>{

    dispatch(handleDec())

  }
  return (
    <div> 
      <h1>Count {count}</h1>
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleDecrement}> Decrement </button>
      {/* <button onClick={handleIncrement}> Add </button> */}
      <h1>Data:</h1>
      <ul>
        {/* {JSON.stringify(data)} */}
        {/* {data.length} */}
        {data.length > 0 && data?.map(item => (
          <li key={item.id}>{item.title}---{item.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReduxCounter;
