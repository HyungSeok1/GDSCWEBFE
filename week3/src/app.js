import React, { useState } from "react";
import "./app.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  
  const editTask = (index, newTask) => {
    const newTasks = [...tasks];
    newTasks[index] = newTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addTask} id="addButton">Add</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} 
            <button id = "mod" onClick={() => editTask(index, prompt("Modify:"))}>Modify</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
