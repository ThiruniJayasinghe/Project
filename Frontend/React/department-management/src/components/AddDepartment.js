import React, { useState } from "react";
import { createDepartment } from "../api/departmentService";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  const [department, setDepartment] = useState({ name: "", location: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDepartment(department);
    navigate("/department");
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h2>Add Department</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="location" placeholder="Location" onChange={handleChange} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddDepartment;
