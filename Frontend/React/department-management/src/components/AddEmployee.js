import React, { useState } from "react";
import { createEmployee } from "../api/employeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    salary: "",
    departmentId: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(employee);
    navigate("/emp");
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        type="tel"
        onChange={handleChange}
        required
      />
      <input
        name="salary"
        placeholder="Salary"
        type="number"
        onChange={handleChange}
        required
      />
      <input
        name="departmentId"
        placeholder="Department ID"
        type="number"
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEmployee;
