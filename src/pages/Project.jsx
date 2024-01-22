import { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"


import useProjects from "../hooks/useProjects"

import NoImage from "../components/NoImage"
import Tag from "../components/Tag"
import Table from "../components/Table"
import TasksModal from "../components/TasksModal"
import ActionsModal from "../components/ActionsModal"
import BoxFiles from "../components/BoxFiles"
import RichText from "../components/RichText"


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
          <h1 className="text-xl my-5"><span className="font-bold text-2xl">Nombre: </span> {project.name}</h1>
          <p className="font-bold text-2xl">Descripción:</p>
          <p className="text-xl">{project.description}</p>
          <p className="text-xl"><span className="font-bold text-2xl">Cliente:</span> {project.client}</p>
          <p className="text-xl"><span className="font-bold text-2xl">Teléfono:</span> {project.phone}</p>
          <p className="text-xl"><span className="font-bold text-2xl">Encargado:</span> {project.leader}</p>
          <Tag />
        </div>
      </div>

      <div>

        <div className="flex justify-center items-center mb-5">
          <h2 className="text-2xl font-bold text-center">Tareas</h2>

          {/* verificar si hay tareas */}
          <TasksModal />
        </div>
        <Table />
      </div>

      <div className="my-5">

        <div className="flex justify-center items-center">
          <h2 className="text-2xl text-center font-bold">Acciones</h2>
          <ActionsModal />
        </div>
        

        <div className="bg-gray-100 w-3/4 flex justify-center items-center mx-auto my-5 h-40">
          Todas las acciones
        </div>
        {/* verificar si hay acciones */}
      </div>

      <div className="container mx-auto">
        <h2 className="text-2xl text-center font-bold">Archivos relacionados con el proyecto</h2>
        <div className="my-5 flex justify-center">

          <BoxFiles />
        </div>
        {/* verificar si hay archivos */}
      </div>
      
    </section>
  )
}

export default Project
