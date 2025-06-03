// src/pages/ProfilePage.js

import React, { useState, useEffect } from 'react';
import '../styles/ProfilePage.css'; // Style it as needed

import axios from 'axios';  // For making HTTP requests

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId] = useState(localStorage.getItem('userId')); 

  useEffect(() => {
    // Fetch current profile data on component mount
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/api/auth/${userId}`);
        const userData = response.data;
        setName(userData.name);
        setEmail(userData.email);
      } catch (err) {
        console.error('Error fetching user profile:', err);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

    try {
      const response = await axios.put(
        '/api/auth/profile',
        {
          name,
          email,
          password, // Only include password if it's updated
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 200) {
        alert('Profile updated successfully');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to update profile');
    }
  };
  return (
    <div className="profile-page">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
