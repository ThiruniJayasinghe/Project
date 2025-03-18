import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getDepartments = () => axios.get(`${API_URL}/departments`);
export const getDepartment = (id) => axios.get(`${API_URL}/department/${id}`);
export const createDepartment = (data) => axios.post(`${API_URL}/department`, data);
export const updateDepartment = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteDepartment = (id) => axios.delete(`${API_URL}/${id}`);
