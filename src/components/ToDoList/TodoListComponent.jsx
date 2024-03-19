import React, { useState } from "react";
import "./todolist.css";
const TodoListComponent = () => {
  //bussiness logic
  const [userInput, setUserInput] = useState("");
  const [taskList, setTasksList] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleAddTask = () => {
    // console.log("eide")
    // const currentTasks=taskList;
    // currentTasks.push(userInput);
    // setTasksList(currentTasks)
    if (userInput !== "") {
      setTasksList((prevList) => [...prevList, userInput]);
      setUserInput("");
    }
  };

  const getTasks = () => {
    return taskList.map((task) => (
      <>
        <div className="list-of-tasks">
          <input type="checkbox" name="" id="" />
          {task}
        </div>
        <hr />
      </>
    ));
  };

  return (
    <div className="todo-container">
      <h1>THINGS TO DO</h1>
      <br />
      <div>
        {userInput}

        <div>
          <input
            type="text"
            className="input-text"
            value={userInput}
            placeholder="Add a new task"
            onChange={handleUserInput}
          />
          <button className="add-task" onClick={handleAddTask}>
            {" "}
            +{" "}
          </button>
        </div>
        <div>{taskList.length > 0 ? getTasks() : "No tasks to do"}</div>
        {JSON.stringify(taskList)}
      </div>
    </div>
  );
};

export default TodoListComponent;
