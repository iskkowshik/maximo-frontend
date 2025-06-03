import React, { useState, useEffect } from "react";
import "../styles/EisenhowerMatrix.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import API from "../utils/api"; // Import API instance

const EisenhowerMatrix = () => {
  const [tasks, setTasks] = useState({
    quadrant1: [],
    quadrant2: [],
    quadrant3: [],
    quadrant4: [],
  });
  const [inputVisible, setInputVisible] = useState({});

  // Fetch tasks from backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const responses = await Promise.all(
          ["quadrant1", "quadrant2", "quadrant3", "quadrant4"].map((quad) =>
            API.get(`/eisenhower/${quad}`)
          )
        );
        const tasksData = responses.reduce((acc, res, i) => {
          acc[`quadrant${i + 1}`] = res.data;
          return acc;
        }, {});
        setTasks(tasksData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (quadrantId) => {
    if (inputVisible[quadrantId]) return;

    setInputVisible({ ...inputVisible, [quadrantId]: true });
  };

  const saveTask = async (quadrantId, taskText) => {
    if (!taskText.trim()) {
      alert("Please fill in the task before adding it.");
      return;
    }
    try {
      const response = await API.post("/eisenhower", {
        quadrant: quadrantId,
        text: taskText,
        completed: false,
        date: "",
      });
      setTasks({
        ...tasks,
        [quadrantId]: [...tasks[quadrantId], response.data],
      });
      setInputVisible({ ...inputVisible, [quadrantId]: false });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (quadrantId, index) => {
    const taskToDelete = tasks[quadrantId][index];
    try {
      await API.delete(`/eisenhower/${taskToDelete._id}`);
      const updatedTasks = [...tasks[quadrantId]];
      updatedTasks.splice(index, 1);
      setTasks({ ...tasks, [quadrantId]: updatedTasks });
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (quadrantId, index) => {
    const taskToUpdate = tasks[quadrantId][index];
    try {
      const updatedTask = {
        ...taskToUpdate,
        completed: !taskToUpdate.completed,
      };
      await API.put(`/eisenhower/${taskToUpdate._id}`, updatedTask);
      const updatedTasks = [...tasks[quadrantId]];
      updatedTasks[index] = updatedTask;
      setTasks({ ...tasks, [quadrantId]: updatedTasks });
    } catch (err) {
      console.error(err);
    }
  };

  const resetQuadrant = async (quadrantId) => {
    if (window.confirm("Are you sure you want to reset this quadrant?")) {
      try {
        await Promise.all(
          tasks[quadrantId].map((task) => API.delete(`/eisenhower/${task._id}`))
        );
        setTasks({ ...tasks, [quadrantId]: [] });
        setInputVisible({ ...inputVisible, [quadrantId]: false });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="eisenhower-matrix">
      <Header />
      <Navbar />
      <div className="matrix-container">
        {[1, 2, 3, 4].map((id) => (
          <div key={id} className={`quadrant quadrant${id}`} id={`quadrant${id}`}>
            <h3 className="quadrant-title">
              {id === 1 && "Important and Urgent"}
              {id === 2 && "Important and Not Urgent"}
              {id === 3 && "Urgent and Not Important"}
              {id === 4 && "Not Urgent and Not Important"}
            </h3>
            <div className="quad-buttons">
              <button className="add-task-btn" onClick={() => addTask(`quadrant${id}`)}>
                + Add Task
              </button>
              <button className="reset-btn" onClick={() => resetQuadrant(`quadrant${id}`)}>
                Reset
              </button>
            </div>
            <ul>
              {tasks[`quadrant${id}`].map((task, index) => (
                <li key={task._id} className="task">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(`quadrant${id}`, index)}
                  />
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      task.text = e.target.innerText.trim();
                      setTasks({ ...tasks });
                    }}
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task.text}
                  </span>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(`quadrant${id}`, index)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
            {inputVisible[`quadrant${id}`] && (
              <input
                type="text"
                className="task-input"
                placeholder="Enter new task"
                onKeyDown={(e) =>
                  e.key === "Enter" && saveTask(`quadrant${id}`, e.target.value)
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EisenhowerMatrix;
