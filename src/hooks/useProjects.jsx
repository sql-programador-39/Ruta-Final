import ProjectsContext from "../context/ProjectsProvider"
import { useContext } from "react"

const useProjects = () => {
  return useContext(ProjectsContext)  
}

export default useProjects
