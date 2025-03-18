import React, { useEffect, useState } from "react";
import { getDepartments, deleteDepartment } from "../api/departmentService";
import { useNavigate } from "react-router-dom";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDepartments().then((response) => setDepartments(response.data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      await deleteDepartment(id);
      setDepartments(departments.filter((dept) => dept.id !== id));
    }
  };

  return (
    <div className="department-list-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <button className="nav-btn" onClick={() => navigate("/add")}>
          Add Department
        </button>
        <button className="nav-btn" onClick={() => navigate("/emp")}>
          View Employees
        </button>
        <button className="nav-btn" onClick={() => navigate("/projects")}>
          View Projects
        </button>
      </nav>

      <h2 className="text-3xl font-semibold mb-6 text-center">Department List</h2>

      <ul className="department-list space-y-4">
        {departments.map((dept) => (
          <li key={dept.id} className="department-item">
            <div className="flex-1">
              <p className="font-medium">{dept.name}</p>
              <p className="text-sm text-gray-600">{dept.location}</p>
            </div>
            <div className="department-actions space-x-2">
              <button className="btn-edit" onClick={() => navigate(`/edit/${dept.id}`)}>
                Edit
              </button>
              <button className="btn-delete" onClick={() => handleDelete(dept.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button className="btn-logout" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
};

export default DepartmentList;
