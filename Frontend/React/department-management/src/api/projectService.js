// src/services/ProjectService.js
import axios from "axios";

const API_URL = "https://localhost:7287/api/Projects"; 

const projectService = {
  getAllProjects: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getProjectById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  createProject: async (projectData) => {
    const response = await axios.post(API_URL, projectData);
    return response.data;
  },

  updateProject: async (id, projectData) => {
    const response = await axios.put(`${API_URL}/${id}`, projectData);
    return response.data;
  },

  deleteProject: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  }
};

export default projectService;
