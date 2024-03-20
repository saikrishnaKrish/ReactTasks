import { useState } from "react";
import "./todolist.css";
import uuid4 from "uuid4";
import TasksBar from "./TasksBar";

const TodoListComponent = () => {


  //bussiness logic
  const [userInput, setUserInput] = useState("");
  const [taskList, setTasksList] = useState([]);
  const [sortList,setSortList]=useState([]);


  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleAddTask = () => {
    // console.log("eide")
    // const currentTasks=taskList;
    // currentTasks.push(userInput);
    // setTasksList(currentTasks)
    if (userInput.trim() !== "") {
        const newTask={
            id:uuid4(),
            task:userInput,
            status:"active"
        }
     
      setTasksList((prevList) => [...prevList, newTask]);
      setUserInput("");
    }
  };

  const handleKeyDown=(e)=>{
    if(e.key=="Enter"){
        e.preventDefault();
        handleAddTask()
    }
  }

  const showList=(currStatus)=>{
    console.log(currStatus)
    if(currStatus== "active" || currStatus=="completed"){
      const updatedList = taskList.filter((task)=>task.status==currStatus)
      setSortList(updatedList);
    }
    else
    setSortList(taskList);
  }


  return (
    <div className="todo-container">
      <h1>THINGS TO DO</h1>
      <br />
      <div>
        {/* {userInput} */}

        <div>
          <input
            type="text"
            className="input-text"
            value={userInput}
            placeholder="Add a new task"
            onChange={handleUserInput}
            onKeyDown={handleKeyDown}
          />
          <button className="add-task" onClick={handleAddTask}>
            {" "} + {" "}
          </button>
        </div>
      
        {JSON.stringify(taskList)}
      </div>

      <TasksBar taskList={sortList} setTasksList={setTasksList} showList={showList}></TasksBar>
    </div>
  );
};

export default TodoListComponent;
