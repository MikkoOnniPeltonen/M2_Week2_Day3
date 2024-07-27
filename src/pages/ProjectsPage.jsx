// src/pages/ProjectsPage.jsx

import projectsData from "./../projects-data.json";
import { Link } from 'react-router-dom'

import { v4 as uuidv4 } from 'uuid'

function ProjectsPage () {
  return (
    <div>
      <h2>Projects</h2>
      {projectsData.map((project) => {
        return (
          <div key={uuidv4()} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
            <Link to={`/projects/${project._id}`}>Go to Projects</Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
