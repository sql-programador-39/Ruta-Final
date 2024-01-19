import { createContext, useState, useEffect } from "react";

const ProjectsContext = createContext()

const ProjectsProvider = ({children}) => {

  const [projects, setProjects] = useState([])


  const getProjects = async () => {
    try {
      const response = await fetch("/public/data/projects.json");
  
      if (!response.ok) {
        throw new Error(`Error al obtener los proyectos: ${response.statusText}`);
      }
  
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export { ProjectsProvider }

export default ProjectsContext
