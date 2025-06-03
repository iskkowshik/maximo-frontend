import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/LandingPage.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import EisenhowerMatrix from './pages/EisenhowerMatrix'; // Import the Eisenhower Matrix
import SpinningWheel from './pages/SpinningWheel'; // Import Spinning Wheel
import MilestoneSetter from './pages/MilestoneSetter'; // Import Milestone Setter
import PrioritySetter from './pages/PrioritySetter'; // Import Priority Setter
// import Navbar from './components/Navbar'; // Import Navbar
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Navbar /> Navbar is now included on all pages */}
        <Routes>
          {/* Define all your routes here */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/eisenhower-matrix" element={<EisenhowerMatrix />} />
          <Route path="/spinning-wheel" element={<SpinningWheel />} />
          <Route path="/milestone-setter" element={<MilestoneSetter />} />
          <Route path="/priority-setter" element={<PrioritySetter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
