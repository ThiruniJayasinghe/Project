import axios from "axios";

const API_URL = "https://localhost:7287/api/Employees";  // Adjust the URL for your .NET backend

// Get all employees
export const getEmployees = () => axios.get(API_URL);

// Get a specific employee by ID
export const getEmployee = (id) => axios.get(`${API_URL}/${id}`);

// Create a new employee
export const createEmployee = (data) => axios.post(API_URL, data);

// Update an existing employee
export const updateEmployee = (id, data) => axios.put(`${API_URL}/${id}`, data);

// Delete an employee by ID
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
