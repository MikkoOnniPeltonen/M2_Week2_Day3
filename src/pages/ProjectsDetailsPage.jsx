
import { useParams } from "react-router-dom"
import projects from '../projects-data.json'

function ProjectsDetailsPage() {

    const {projectId} = useParams()

    const foundProject = projects.find((oneProject) => {
        return projectId === oneProject._id
    })

  return (
    <div>
      <h1>Cool stuff</h1>
      <h2>{foundProject.name}</h2>
      <h5>{foundProject.year}</h5>
      <p>{foundProject.description}</p>
      <p>{foundProject.technologies}</p>
    </div>
  )
}

export default ProjectsDetailsPage
