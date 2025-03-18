import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DepartmentList from "./components/DepartmentList";
import AddDepartment from "./components/AddDepartment";
import EditDepartment from "./components/EditDepartment";
import './App.css';
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Login from './components/login';
import ProjectList from "./components/ProjectList";
import AddProject from "./components/AddProject";
import EditProject from "./components/EditProject";

function App() {
  return (
    <Router>
      <Routes>
      
      <Route path="/" element={<Login />} />
        <Route path="/department" element={<DepartmentList />} />
        <Route path="/add" element={<AddDepartment />} />
        <Route path="/edit/:id" element={<EditDepartment />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/editEmployee/:id" element={<EditEmployee />} />
        <Route path="/emp" element={<EmployeeList />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/edit-project/:id" element={<EditProject />} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
