import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api/employeeService";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEmployees().then((response) => setEmployees(response.data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await deleteEmployee(id);
      setEmployees(employees.filter((emp) => emp.employeeId !== id));
    }
  };

  return (
    <div className="employee-list-container">
      <h2 className="text-3xl font-semibold mb-6 text-center">Employee List</h2>
      <button
        className="button-add"
        onClick={() => navigate("/addEmployee")}
      >
        Add Employee
      </button>
      <br></br>
      <button
        className="btn-view"
        onClick={() => navigate("/emp")}
      >
        View Employees
      </button>
      <ul className="employee-list space-y-4">
        {employees.map((emp) => (
          <li key={emp.employeeId} className="employee-item">
            <div className="info flex-1">
              <p className="font-medium">{emp.name}</p>
              <p className="text-sm text-gray-600">{emp.email}</p>
              <p className="text-sm text-gray-600">{emp.phone}</p>
              <p className="font-semibold text-gray-900">{emp.salary}</p>
            </div>
            <div className="buttons space-x-2">
              <button
                className="button-edit"
                onClick={() => navigate(`/editEmployee/${emp.employeeId}`)}
              >
                Edit
              </button>
              <button
                className="button-delete"
                onClick={() => handleDelete(emp.employeeId)}
              >
                Delete
              </button>
            </div>

            <br></br>
      
          </li>
        ))}
      </ul>

      <button
        className="btn-view"
        onClick={() => navigate("/")}
      >
        Logout
      </button>
    </div>

    
  );
};

export default EmployeeList;
