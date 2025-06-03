import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' }); // Base URL for all API requests

// Milestone API Endpoints
export const addMilestone = (data) => API.post('/milestones/add', data);
export const fetchMilestones = () => API.get('/milestones');

// Priority Tasks API Endpoints
export const fetchPriorityTasks = (date) => API.get(`/priority-tasks/${date}`);
export const addPriorityTasks = (data) => API.post('/priority-tasks', data);
export const toggleTaskCompletion = (taskId) =>
  API.put(`/priority-tasks/complete/${taskId}`);

// Export default API for general use if needed
export default API;
