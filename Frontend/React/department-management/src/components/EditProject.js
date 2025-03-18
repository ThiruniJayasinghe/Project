// src/components/EditProject.js
import React, { useEffect, useState } from "react";
import ProjectService from "../api/projectService";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    projectName: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    loadProject();
  }, []);

  const loadProject = async () => {
    const data = await ProjectService.getProjectById(id);
    setProject(data);
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ProjectService.updateProject(id, project);
    navigate("/projects");
  };

  return (
    <div>
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name:</label>
          <input type="text" name="projectName" value={project.projectName} onChange={handleChange} required />
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" name="startDate" value={project.startDate.split("T")[0]} onChange={handleChange} required />
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" name="endDate" value={project.endDate.split("T")[0]} onChange={handleChange} required />
        </div>
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
};

export default EditProject;
