import axios from 'axios';

// ✅ Use your live backend URL
const API = axios.create({ baseURL: 'http://51.20.54.109:5000/api' });

// Milestone API Endpoints
export const addMilestone = (data) => API.post('/milestones/add', data);
export const fetchMilestones = () => API.get('/milestones');

// Priority Tasks API Endpoints
export const fetchPriorityTasks = (date) => API.get(`/priority-tasks/${date}`);
export const addPriorityTasks = (data) => API.post('/priority-tasks', data);
export const toggleTaskCompletion = (taskId) =>
  API.put(`/priority-tasks/complete/${taskId}`);

// ✅ Export for general API use (like Eisenhower matrix or others)
export default API;
