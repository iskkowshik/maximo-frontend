import React, { useState, useEffect } from 'react';
import { addPriorityTasks, fetchPriorityTasks, toggleTaskCompletion } from '../utils/api'; // API functions
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../styles/PrioritySetter.css';

const PrioritySetter = () => {
    const [tasks, setTasks] = useState({
        big: '',
        medium: ['', '', ''],
        small: ['', '', '', '', ''],
    });
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [taskList, setTaskList] = useState([]);
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // New: Loading state

    useEffect(() => {
        const loadTasks = async () => {
            setLoading(true); // Start loading
            try {
                const { data } = await fetchPriorityTasks(selectedDate);
                setTaskList(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Error fetching tasks:', err);
                setTaskList([]);
            } finally {
                setLoading(false); // End loading
            }
        };
        loadTasks();
    }, [selectedDate]);

    const handleInputChange = (e, type, index) => {
        setError(''); // Reset error on input
        if (type === 'big') {
            setTasks({ ...tasks, big: e.target.value });
        } else {
            const updatedTasks = [...tasks[type]];
            updatedTasks[index] = e.target.value;
            setTasks({ ...tasks, [type]: updatedTasks });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Array.isArray(taskList) && taskList.some((task) => !task.completed) && !completed) {
            setError('Please mark previous tasks as completed before adding new tasks.');
            return;
        }

        if (!tasks.big.trim() && !tasks.medium.some((task) => task.trim()) && !tasks.small.some((task) => task.trim())) {
            setError('Please provide at least one task before saving.');
            return;
        }

        try {
            const payload = { date: selectedDate, tasks, completed: false };
            const { data } = await addPriorityTasks(payload);
            setTaskList((prev) => [...prev, data]);
            setTasks({ big: '', medium: ['', '', ''], small: ['', '', '', '', ''] });
            setCompleted(false);
            setError('');
        } catch (err) {
            console.error('Error saving tasks:', err);
            setError('Failed to save tasks. Please try again.');
        }
    };

    const handleCompleteToggle = async (taskId) => {
        try {
            const { data } = await toggleTaskCompletion(taskId);
            if (data && typeof data.completed === 'boolean') {
                setTaskList((prev) =>
                    prev.map((task) =>
                        task._id === taskId ? { ...task, completed: data.completed } : task
                    )
                );
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (err) {
            console.error('Failed to update task status:', err);
            alert('Could not update task status. Please try again.');
        }
    };

    return (
        <div className="priority-setter-page">
            <Navbar />
            <Header />
            <div className="priority-setter">
                <h2>1-3-5 Rule</h2>
                <form onSubmit={handleSubmit} className="priority-form">
                    <label>
                        Select Date:
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </label>
                    {error && <p className="error">{error}</p>}
                    <div className="task-section">
                        <h3>1 Big Task</h3>
                        <textarea
                            value={tasks.big}
                            onChange={(e) => handleInputChange(e, 'big')}
                            placeholder="Add your big task"
                            required
                        />
                    </div>
                    <div className="task-section">
                        <h3>3 Medium Tasks</h3>
                        {tasks.medium.map((task, idx) => (
                            <textarea
                                key={idx}
                                value={task}
                                onChange={(e) => handleInputChange(e, 'medium', idx)}
                                placeholder={`Task ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <div className="task-section">
                        <h3>5 Small Tasks</h3>
                        {tasks.small.map((task, idx) => (
                            <textarea
                                key={idx}
                                value={task}
                                onChange={(e) => handleInputChange(e, 'small', idx)}
                                placeholder={`Task ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <div className="complete-check">
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => setCompleted(!completed)}
                        />
                        <label>Mark previous tasks as completed</label>
                    </div>
                    <button type="submit">Save Tasks</button>
                </form>

                <div className="task-display">
                    <h3>Tasks for {selectedDate}</h3>
                    {loading ? (
                        <p>Loading tasks...</p>
                    ) : taskList.length > 0 ? (
                        taskList.map((task) => (
                            <div key={task._id} className="task-card">
                                <h4>{task.completed ? 'Completed Tasks' : 'Current Tasks'}</h4>
                                <p><strong>Big Task:</strong> {task.tasks.big}</p>
                                <p><strong>Medium Tasks:</strong></p>
                                <ul>{task.tasks.medium.map((mediumTask, idx) => <li key={idx}>{mediumTask}</li>)}</ul>
                                <p><strong>Small Tasks:</strong></p>
                                <ul>{task.tasks.small.map((smallTask, idx) => <li key={idx}>{smallTask}</li>)}</ul>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => handleCompleteToggle(task._id)}
                                        />
                                        Mark as completed
                                    </label>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No tasks set for this day.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PrioritySetter;
