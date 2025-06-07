import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/home.css";

// 🌐 Live API base URL
const API_URL = "http://51.20.54.109:5000/api/tasks";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error("❌ Error fetching tasks:", error);
      alert("Failed to fetch tasks. Check server.");
    }
  };

  const addTask = async () => {
    if (!task.trim()) {
      alert("Write something before adding!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(API_URL, { text: task });
      setTasks([...tasks, response.data]);
      setTask("");
    } catch (error) {
      console.error("❌ Error adding task:", error);
      alert("Failed to add task.");
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (error) {
      console.error("❌ Error deleting task:", error);
      alert("Failed to delete task.");
    }
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        id="input-box"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task..."
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask} disabled={loading}>
        {loading ? "Adding..." : "Add Task"}
      </button>

      <ul id="listto">
        {tasks.map((t) => (
          <li key={t._id}>
            {t.text}
            <button onClick={() => deleteTask(t._id)} className="delete-btn">🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
