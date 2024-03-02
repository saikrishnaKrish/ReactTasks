import { useRef, useState } from "react";
import "./TodoApplication.css"; // Import your CSS file

const TodoApplication = () => {
  const [cTask, setCTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tTitle,setTtitle]=useState("")
  const id = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cTask !== "") {
      const newTask = {
        id: id.current++,
        title:tTitle,
        task: cTask,
        status:"Pending"
      };
      setTasksList((prevList) => [...prevList, newTask]);
      setCTask("");
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    let taskList = tasksList.filter((item) => item.id !== id);
    setTasksList(taskList);
  };

  const onEdit = (e, id) => {
    e.preventDefault();
    const cid = tasksList.find((item) => item.id === id);
    setSelectedTask(cid);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (selectedTask) {
      const updatedList = tasksList.map((item) =>
        item.id === selectedTask.id
          ? {
              ...item,
              task: selectedTask.task,
              tdate: new Date().toLocaleDateString(),
              
            }
          : item
      );
      setTasksList(updatedList);
      setSelectedTask(null);
    }
  };

  const displayList = () => {
    const tasks = tasksList?.map((ele) => {
      return (
        <div key={ele.id} className="task-item">
          {selectedTask && selectedTask.id === ele.id ? (
            <>
              <input
                type="text"
                id={ele.id}
                value={selectedTask.task}
                onChange={(e) =>
                  setSelectedTask({ ...selectedTask, task: e.target.value })
                }
                className="edit-input"
              />
              <small className="task-date">{ele.tdate}</small>
              <button onClick={(e) => handleUpdate(e)} className="update-btn">
                Update
              </button>
            </>
          ) : (
            <>
              <h6 className="task-name">{ele.task}</h6>
              <small className="task-date">{ele.tdate}</small>
            </>
          )}

          <button onClick={(e) => onEdit(e, ele.id)} className="edit-btn">
            Edit <i className="ri-pencil-fill"></i>
          </button>
          <button
            onClick={(e) => handleDelete(e, ele.id)}
            className="delete-btn"
          >
            Delete <i className="ri-delete-bin-2-fill"></i>
          </button>
        </div>
      );
    });

    return tasks;
  };

  const displayTodos=()=>{
    const tasks=tasks.map((item)=>{
        return (
            <tr key={item.id}>
            <td>
                <input type="checkbox" />
            </td>
            <td>{item.title}</td>
            <td>{item.task}</td>
            <td>{item.status}</td>
            <td>
                <button onClick={onEdit} >Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
        )
    })
  }

  const clearTodos =()=>{}
  const markAsCompleted=()=>{}
  
  return (
    <div className="tasks-container">
      Todo Application
      <form className="input-Container">
        
        <input type="text" placeholder="Todo Title"
        value={tTitle} onChange={(e)=>setTtitle(e.target.value)} 
        className="task-title"/>
        
        <input
          type="text"
          placeholder="Description"
          value={cTask}
          onChange={(e) => setCTask(e.target.value)}
          className="task-input"/>

        <button onClick={handleSubmit} className="add-btn">
          Create Todo
        </button>
      </form>

      <button onClick={clearTodos} className="add-btn">
          Clear Todos
        </button>
        <button onClick={markAsCompleted} className="add-btn">
          Mark As Completed
        </button>

      <h5>Tasks List</h5>
      <table>
        <thead>
          <tr>
            <td>
              <input type="checkbox" className="select-all"></input>
            </td>  
            <td>
              Name
            </td>
            <td>
              Description
            </td>
            <td>
              Status
            </td>
            <td>
              Action
            </td>
          </tr>  
        </thead> 
        <tbody>
          {
         
          }         
        </tbody> 
      </table>      
      
      {tasksList.length > 0 && displayList()}
    </div>
  );
};

export default TodoApplication;
