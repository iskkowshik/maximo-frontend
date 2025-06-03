import React, { useState } from 'react';
import '../styles/SpinningWheel.css';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
const SpinningWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [task, setTask] = useState('');
  const [quote, setQuote] = useState('');

  const tasks = [
    { label: 'Work on project', quote: 'Progress is progress, no matter how small.' },
    { label: 'Exercise', quote: 'A healthy body fuels a healthy mind.' },
    { label: 'Read a book', quote: 'Reading is to the mind what exercise is to the body.' },
    { label: 'Clean your workspace', quote: 'A clean space is a clear mind.' },
    { label: 'Meditate', quote: 'Calm your mind, and your body will follow.' },
    { label: 'Learn something new', quote: 'Knowledge is power!' },
  ];

  const handleSpin = () => {
    const randomRotation = Math.floor(Math.random() * 360) + 720; // Spins multiple times for effect
    setRotation(randomRotation);

    // After the spin ends, pick a random task and quote
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      setTask(tasks[randomIndex].label);
      setQuote(tasks[randomIndex].quote);
    }, 3000); // Ensure this matches with the spinning duration
  };

  return (
    <div className="spinning-wheel">
      <Header />
      <Navbar />
    <div className="wheel-container">
      <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}></div>
      <button className="spin-btn" onClick={handleSpin}>Spin</button>
      <div className="result">
        <h2>{task}</h2>
        <p>{quote}</p>
      </div>
    </div>
    </div>
  );
};

export default SpinningWheel;
