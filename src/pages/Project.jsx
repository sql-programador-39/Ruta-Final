import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useProjects from "../hooks/useProjects"

import NoImage from "../components/NoImage"
import Tag from "../components/Tag"


const Project = () => {

  const [project, setProject] = useState({})

  const { projects } = useProjects()

  const { id } = useParams()

  useEffect(() => {
    projects.map (project => {
      if (project.id === id) {
        setProject(project)
      }
    })
  }, [])

  return (
    <section >
      <div className="grid grid-cols-2 m-auto h-screen container">
        <div className="m-auto w-1/2">
          {
            project.image ? (
              <img 
                className="w-full" 
                src={ project.image } 
                alt="Sunset in the mountains" 
              />
            ) : (
              <NoImage />
            )
          }
        </div>

        <div className=" my-auto">
          <h1 className="text-4xl my-10"><span className="font-bold">Nombre: </span> {project.name}</h1>
          <p className="text-xl"><span className="font-bold text-3xl">Descripción:</span>{project.description}</p>
          <p className="text-xl"><span className="font-bold text-3xl">Cliente:</span>{project.client}</p>
          <p className="text-xl"><span className="font-bold text-3xl">Teléfono:</span>{project.phone}</p>
          <p className="text-xl"><span className="font-bold text-3xl">Encargado:</span>{project.leader}</p>
          <Tag />
        </div>
      </div>
    </section>
  )
}

export default Project
