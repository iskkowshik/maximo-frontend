import React from 'react';
import '../styles/home.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PomodoroTimer from '../components/PomodoroTimer';
import TodoList from '../components/TodoList'; // Import TodoList component

const HomePage = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="main-container">
                <Navbar />
                <div className="home-content">
                    <div className="left-side">
                        <TodoList />  {/* Add TodoList on the left side */}
                    </div>
                    <div className="right-side">
                        <PomodoroTimer />  {/* Keep Pomodoro Timer on the right */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
