import { createContext, useState, useEffect, useMemo } from "react";
import data from '../../public/data/projects.js'

const ProjectsContext = createContext()

const ProjectsProvider = ({children}) => {

  const [projects, setProjects] = useState([])
  const [project, setProject] = useState({})

  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [client, setClient] = useState("")
  const [phone, setPhone] = useState("")
  const [leader, setLeader] = useState("")
  /* const [tags, setTags] = useState([])
  const [tasks, setTasks] = useState([]) */
  const [actions, setActions] = useState([])
  /*const [files, setFiles] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [inProgressTasks, setInProgressTasks] = useState([])
  const [overdueTasks, setOverdueTasks] = useState([]) */

  

  const getProjects = async () => {
    try {
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
        project,
        name,
        setName,
        description,
        setDescription,
        client,
        setClient,
        phone,
        setPhone,
        leader,
        setLeader,
        actions,
        setActions,

      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export { ProjectsProvider }

export default ProjectsContext
