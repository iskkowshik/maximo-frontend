import React, { useState, useEffect } from 'react';
import { addMilestone, fetchMilestones } from '../utils/api';
import '../styles/MilestoneSetter.css';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
const MilestoneSetter = () => {
    const [milestones, setMilestones] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        description: '',
    });

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const loadMilestones = async () => {
            const { data } = await fetchMilestones();
            setMilestones(data);
        };
        loadMilestones();
    }, []);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to 00:00 for accurate comparison
    
        if (selectedDate < today) {
            alert('You cannot add milestones for past dates.');
            return;
        }
    
        if (formData.title && formData.date && formData.description) {
            try {
                const { data } = await addMilestone(formData);
                setMilestones([...milestones, data]);
                setFormData({ title: '', date: '', description: '' });
            } catch (err) {
                console.error(err);
                alert(err.response?.data?.message || 'Failed to add milestone.');
            }
        }
    };
    

    const renderCalendar = () => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        const days = [];
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const events = milestones.filter(
                (milestone) => new Date(milestone.date).toDateString() === day.toDateString()
            );

            days.push(
                <div key={i} className="calendar-day">
                    <span>{i}</span>
                    {events.map((event, idx) => (
                        <div key={idx} className="event">
                            {event.title}
                        </div>
                    ))}
                </div>
            );
        }
        return days;
    };

    const handleMonthChange = (increment) => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1)
        );
    };

    return (
        <div className="milestone">
      <Header />
      <Navbar />
      <h2>Milestone Setter</h2>
        <div className="milestone-setter">
            
            <form className="milestone-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <button type="submit">Add Milestone</button>
            </form>

            <div className="calendar">
                <div className="calendar-header">
                    <button onClick={() => handleMonthChange(-1)}>&lt;</button>
                    <h3>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
                    <button onClick={() => handleMonthChange(1)}>&gt;</button>
                </div>
                <div className="calendar-grid">{renderCalendar()}</div>
            </div>
        </div>
        </div>
    );
};

export default MilestoneSetter;
