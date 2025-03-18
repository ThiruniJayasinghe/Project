import React, { useEffect, useState } from "react";
import { getEmployee, updateEmployee } from "../api/employeeService";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    salary: "",
    departmentId: "",
  });

  useEffect(() => {
    getEmployee(id).then((response) => setEmployee(response.data));
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(id, employee);
    navigate("/emp");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Employee</h2>
      <input
        name="name"
        value={employee.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        value={employee.email}
        type="email"
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        value={employee.phone}
        type="tel"
        onChange={handleChange}
        required
      />
      <input
        name="salary"
        value={employee.salary}
        type="number"
        onChange={handleChange}
        required
      />
      <input
        name="departmentId"
        value={employee.departmentId}
        type="number"
        onChange={handleChange}
        required
      />
      <button type="submit">Update</button>
      <button type="button" onClick={() => navigate("/emp")}>Cancel</button>
    </form>
  );
};

export default EditEmployee;
