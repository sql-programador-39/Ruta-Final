import { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"


import useProjects from "../hooks/useProjects"


import NoImage from "../components/NoImage"
import Tag from "../components/Tag"
import Table from "../components/Table"
import TasksModal from "../components/TasksModal"
import ActionsModal from "../components/ActionsModal"
import BoxFiles from "../components/BoxFiles"




const Project = () => {

  const { projects, project, setProject } = useProjects()

  const [dataProject, setDataProject] = useState({})

  const { id } = useParams()


  useEffect(() => {
    projects.map(project => {
      if (project.id === id) {
        setDataProject(project)
      }
    })
  }, [])

  useEffect(() => {
    /* projects.map(project => { 
      if (project.id === id) {
        setProject(dataProject)
      }
    }) */
    console.log(dataProject);
    
  }, [project])

  return (
    <section >
      <div className="grid grid-cols-2 m-auto h-screen container">
        <div className="m-auto w-1/2">
          {
            dataProject.image ? (
              <img 
                className="w-full" 
                src={ dataProject.image } 
                alt="Project image" 
              />
            ) : (
              <NoImage />
            )
          }
        </div>

        <div className=" my-auto">
          <h1 className="text-xl my-5"><span className="font-bold text-2xl">Nombre: </span> {dataProject.name}</h1>
          <p className="font-bold text-2xl">Descripción:</p>
          <p className="text-xl">{project.description}</p>
          <p className="text-xl"><span className="font-bold text-2xl">Cliente:</span> {dataProject.client}</p>
          <p className="text-xl"><span className="font-bold text-2xl">Teléfono:</span> {dataProject.phone}</p>
          <p className="text-xl"><span className="font-bold text-2xl">Encargado:</span> {dataProject.leader}</p>
          <div>
            <p className="font-bold text-2xl">Tags:</p>

            {
              dataProject.tags ? (
                <div className="pt-4 pb-5 grid grid-cols-5 gap-2">
                  {(dataProject.tags).map((tag, index) => (
                    <div key={index} className='bg-orange-500 text-orange-200 text-sm font-medium px-2.5 py-0.5 rounded flex justify-between w-full'>
                      <div className="w-full text-center">
                        {tag.name}
                      </div>
                    </div>
                  ))}
            </div>
              ) : (
                <p>No hay tags</p>
              )
            }
          </div>
        </div>
      </div>

      <div>

        <div className="flex justify-center items-center mb-5">
          <h2 className="text-2xl font-bold text-center">Tareas</h2>

          {/* verificar si hay tareas */}
          <TasksModal 
            dataProject={dataProject}
            setDataProject={setDataProject}
          />
        </div>
        <Table 
          dataProject={dataProject}
        />
      </div>

      <div className="my-5">

        <div className="flex justify-center items-center">
          <h2 className="text-2xl text-center font-bold">Acciones</h2>
          <ActionsModal 
            dataProject={dataProject}
            setDataProject={setDataProject}
          />
        </div>
        

        <div className={`bg-gray-100 w-3/4 flex justify-center items-center mx-auto my-5 py-5 ${dataProject.actions ? '' : 'h-40'}`}>
           {
            dataProject.actions ? (
              <div className="grid grid-cols-2 gap-5">
                {
                  dataProject.actions.map(action => (
                    <div key={action.id} className="bg-orange-500 text-white p-2 rounded-lg">
                      <div className="text-xl">
                        {action.action}
                      </div>

                      <div>
                        {action.date}
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : (
              <p className="text-xl">No hay acciones</p>
            )
           }
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
