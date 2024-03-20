import React from 'react'

const TasksBar = ({taskList,showList,setTasksList}) => {

  const handleCheckboxChange=(e)=>{
    const cId= e.target.id;
    const updatedList = taskList?.map((task)=>{
        if(task.id===cId){
            if(task.status=="completed")return {...task,status:"active"}
            if(task.status=="active")return {...task,status:"completed"}
        }
        return task
    })
    setTasksList(updatedList)
   
  }

   const getTasks = () => {
    return taskList?.map((currTask) => (
   
        <div className="list-of-tasks" key={currTask.id} >
          <input type="checkbox" name="" id={currTask.id} 
          onChange={ handleCheckboxChange}
           />
             &nbsp;
             {currTask.status=="active"?currTask.task:<strike> {currTask.task}</strike>}
             {/* {JSON.stringify(task)} */}
             <hr />
        </div>
       
    ));
  };
  return (
    <div>
       {
            taskList?.length > 0 ?
            <p>{taskList?.length} items left</p>
            :"Yooohoo! all tasks completed"
       } 
       <div>
        <button onClick={()=>showList("All")}>All</button>
        <button onClick={()=>showList("active")}>Active</button>
        <button onClick={()=>showList("completed")}>Completed</button>
       </div>

       <div className="tasks-list" >{
        taskList.length > 0 ? 
                getTasks()
         : "No tasks to do"}</div>
    </div>
  )
}

export default TasksBar