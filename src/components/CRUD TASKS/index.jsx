import { useRef, useState } from "react";
import "./TasksComponent.css"; // Import your CSS file

const TasksComponent = () => {
  const [cTask, setCTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const id = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cTask !== "") {
      const newTask = {
        id: id.current++,
        task: cTask,
        tdate: new Date().toLocaleDateString(),
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

  return (
    <div className="tasks-container">
      <form>
        <label className="input-label">Enter the Task:</label>
        <input
          type="text"
          value={cTask}
          onChange={(e) => setCTask(e.target.value)}
          className="task-input"
        />
        <button onClick={handleSubmit} className="add-btn">
          Add Task
        </button>
      </form>
      <h5>Tasks List</h5>
      {tasksList.length > 0 && displayList()}
    </div>
  );
};

export default TasksComponent;
