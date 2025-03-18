import React, { useEffect, useState } from "react";
import ProjectService from "../api/projectService";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await ProjectService.getAllProjects();
    setProjects(data);
  };

  const deleteProject = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await ProjectService.deleteProject(id);
      loadProjects();
    }
  };

  return (
    <div className="container">
      <h2>Project List</h2>
      <button className="btn-add" onClick={() => navigate("/add-project")}>Add Project</button>
      
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.projectId}>
                <td>{project.projectId}</td>
                <td>{project.projectName}</td>
                <td>{new Date(project.startDate).toLocaleDateString()}</td>
                <td>{new Date(project.endDate).toLocaleDateString()}</td>
                <td>
                  <button className="btn-edit" onClick={() => navigate(`/edit-project/${project.projectId}`)}>Edit</button>
                  <button className="btn-delete" onClick={() => deleteProject(project.projectId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<br></br>
      <button className="btn-view" onClick={() => navigate("/department")}>Back</button>
    </div>
  );
};

export default ProjectList;
