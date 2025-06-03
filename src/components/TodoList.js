import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.css";

const TodoList = () => {
  const [task, setTask] = useState("");  // State to store input text for new task
  const [tasks, setTasks] = useState([]);  // State to store the list of tasks

  // Fetch tasks from the backend when the component mounts
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");  // Backend URL to fetch tasks
      setTasks(response.data);  // Set tasks to state
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add a new task
  const addTask = async () => {
    if (!task.trim()) {
      alert("Write something before adding!");
      return;
    }

    try {
      // Send POST request to the backend to create a new task
      const response = await axios.post("http://localhost:5000/api/tasks", { text: task });
      setTasks([...tasks, response.data]);  // Add new task to state
      setTask("");  // Clear the input field
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);  // Send DELETE request to backend
      setTasks(tasks.filter((t) => t._id !== id));  // Remove deleted task from state
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Fetch tasks when the component is mounted
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="todo-list">
      <input
        type="text"
        id="input-box"
        value={task}
        onChange={(e) => setTask(e.target.value)}  // Update task state as user types
        placeholder="Add a task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ul id="listto">
        {tasks.map((t) => (
          <li key={t._id}>
            <input type="checkbox" onClick={() => deleteTask(t._id)} />  {/* Checkbox to delete task */}
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
