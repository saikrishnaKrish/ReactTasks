import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, setValue } from './Store/Slices/todoSlice';

const Todo = () => {

  const {currentTask,todoList}=useSelector(store=>store.todoState);
   const dispatch =  useDispatch();
    const handleChange=(e)=>{
        const {value}=e.target;
        console.log(value)
        dispatch(setValue(value))
    }
    const handleAddTask=(e)=>{
        e.preventDefault()
        dispatch(addTask(currentTask))
    }

  return (
    <div>
        <h2>Todo --{currentTask}</h2>
        <div className='todoListContainer'>
            <div className='inputBox'>
                        <input type='text' value={currentTask}
                        onChange={handleChange}/>
                        <button onClick={handleAddTask}> Submit </button>
            </div>
            <br/>
            <div className='list'>
                <ul>
                   {todoList.map((task,idx)=>{
                        return <li key={idx}> {task}</li>
                   })} 
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Todo