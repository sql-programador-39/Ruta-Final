import { createContext, useState, useEffect } from "react";
import data from '../../public/data/projects.js'

const ProjectsContext = createContext()

const ProjectsProvider = ({children}) => {

  const [projects, setProjects] = useState([])
  const [project, setProject] = useState({})


  const getProjects = async () => {
    try {
      /* const response = await fetch("/public/data/projects.json");
  
      if (!response.ok) {
        throw new Error(`Error al obtener los proyectos: ${response.statusText}`);
      }
  
      const data = await response.json(); */
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects()
  }, [])

  useEffect(() => {
    if (Object.keys(project).length === 0) return

    setProjects([...projects, project])
    setProject({})
  }, [project])

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export { ProjectsProvider }

export default ProjectsContext
