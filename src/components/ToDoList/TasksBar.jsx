import React, { useEffect, useState } from 'react'
import basicOps from './helperFunction'

const TasksBar = ({taskList,setTasksList}) => {
  const [currStatus,setCurrStatus]=useState("All");
  const [itemsLeft,setItemsLeft]=useState(0);

  const showList=(currentStatus)=>{
    console.log(currentStatus)
    setCurrStatus(currentStatus)
  }

  const handleCheckboxChange = (e) => {
    const cId = e.target.id;
    const updatedList = taskList?.map((task) => {
        if (task.id == cId) {
            return task.status ==  "completed" ? { ...task, status: "active" } : { ...task, status: "completed" };
        }
        return task;
    });
    // console.log(updatedList)
    setTasksList(updatedList);
}

   const getTasks = () => {
   const updatedList = basicOps(taskList,currStatus)
    if(updatedList.length==0){
      return <p>No Tasks!!!</p>
    }

    return updatedList?.map((currTask) => (
   
        <div className="list-of-tasks" key={currTask.id} >
          <input type="checkbox" 
          checked={currTask.status=="active"?false:true} 
          name="" id={currTask.id} 
          onChange={ handleCheckboxChange}
           />
             &nbsp;
             {currTask.status=="active"?currTask.task:<strike> {currTask.task}</strike>}
              &nbsp;
              {currTask.status}
             {/* {JSON.stringify(task)} */}
             <hr />
        </div>
       
    ));



  };


  useEffect(()=>{ 
      const count = taskList?.filter((task)=>task.status=="active").length;
      // console.log(count)
      setItemsLeft(count)
  },[taskList])

  return (
    <div>
       {
            taskList?.length > 0 ?
            <p>{itemsLeft} items left</p>
            :"Yooohoo! all tasks completed"
       } 
       <div>
        <button onClick={()=>showList("All")}>All</button>
        <button onClick={()=>showList("active")}>Active</button>
        <button onClick={()=>showList("completed")}>Completed</button>
       </div>

       <div className="tasks-list" >{
        taskList?.length > 0 ? 
                getTasks()
         : "No tasks to do"}</div>
    </div>
  )
}

export default TasksBar