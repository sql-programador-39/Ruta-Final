import { createContext, useState } from "react";

export const ProjectsContext = createContext();

const ProjectsProvider = ({children}) => {

  const [projects, setProjects] = useState([]);

  return (
    <ProjectsProvider
      value={{
        projects,
        setProjects
      }}
    >
      {children}
    </ProjectsProvider>
  )
}

export {
  ProjectsProvider
}

export default ProjectsContext
