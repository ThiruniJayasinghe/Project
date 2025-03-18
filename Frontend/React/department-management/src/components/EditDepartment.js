import React, { useEffect, useState } from "react";
import { getDepartment, updateDepartment } from "../api/departmentService";
import { useNavigate, useParams } from "react-router-dom";

const EditDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [department, setDepartment] = useState({ name: "", location: "" });

  useEffect(() => {
    getDepartment(id).then((response) => setDepartment(response.data));
  }, [id]);

  const handleChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDepartment(id, department);
    navigate("/department");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Department</h2>
      <input name="name" value={department.name} onChange={handleChange} required />
      <input name="location" value={department.location} onChange={handleChange} required />
      <div className="button-group">
  <button className="update-btn" type="submit">✔</button>
  <button className="cancel-btn" type="button" onClick={() => navigate("/department")}>✖</button>
</div>

    </form>
  );
};

export default EditDepartment;
