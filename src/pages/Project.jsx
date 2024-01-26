import { useEffect, useState  } from "react"
import { useParams } from "react-router-dom"

import useProjects from "../hooks/useProjects"
import Table from "../components/Table"
import TasksModal from "../components/TasksModal"
import ActionsModal from "../components/ActionsModal"
import BoxFiles from "../components/BoxFiles"
import TaskCard from "../components/TaskCard"
import ActionCard from "../components/ActionCard"
import ScoreTasks from "../components/ScoreTasks"


const Project = () => {

  const { setProjects, projects } = useProjects()

  const [dataProject, setDataProject] = useState({});
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [tasksPending, setTasksPending] = useState(0);
  const [tasksDelayed, setTasksDelayed] = useState(0);


  const { id } = useParams()


  useEffect(() => {
    const foundProject = projects.find((p) => p.id === id);
    if (foundProject) {
      setDataProject({ ...foundProject });
    }
  }, [])

  useEffect(() => {
    if (Object.keys(dataProject).length === 0) return

    let completedCount = 0;
    let pendingCount = 0;
    let delayedCount = 0;

    dataProject.tasks.forEach((task) => {
      if (task.status === "1") {
        completedCount++;
      } else if (task.status === "2") {
        pendingCount++;
      } else if (task.status === "3") {
        delayedCount++;
      }
    });

    setTasksCompleted(completedCount);
    setTasksPending(pendingCount);
    setTasksDelayed(delayedCount);

    const updatedProjects = projects.map((p) =>
      p.id === id ? dataProject : p
    );

    setProjects(updatedProjects);
  }, [dataProject]);

  useEffect(() => { 
    if (Object.keys(dataProject).length === 0) return

    const  newAction = {
      id: (Date.now()).toString(),
      action: "Se creo o modifico una tarea",
      responsable: "Juan Perez",
      date: new Date().toLocaleDateString()
    }

    if (dataProject.tasks.length === 0) return
    setDataProject((prevProject) => ({
      ...prevProject,
      actions: [...(prevProject.actions || []), newAction],
    }))
  }, [dataProject.tasks])

  useEffect(() => { 
    if (Object.keys(dataProject).length === 0) return
    if (dataProject.files.length === 0) return

    const  newAction = {
      id: (Date.now()).toString(),
      action: "Se agrego un archivo al proyecto",
      responsable: "Camilo Ardila",
      date: new Date().toLocaleDateString()
    }

    setDataProject((prevProject) => ({
      ...prevProject,
      actions: [...(prevProject.actions || []), newAction],
    }))
  }, [dataProject.files])


  return (
    <section className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-screen md:h-auto my-10 container">
        <div className="m-auto w-4/6 sm:w-1/2 md:w-3/4">
          <img
            className="w-full"
            src={ dataProject.image }
            alt="Project image"
          />
        </div>

        <div className="m-auto w-11/12 md:w-full mt-2 md:mt-0">
          <h1 className="text-2xl sm:text-3xl font-bold sm:mt-0">{dataProject.name}</h1>
          <p className="text-xl text-gray-500 pb-3 mb-2 border-b">{dataProject.alias}</p>
          <p className="text-xl">{dataProject.description}</p>
          <p className="text-xl my-2"><span className="font-bold text-2xl">Propietario:</span> {dataProject.propietario}</p>
          <p className="text-xl my-2"><span className="font-bold text-2xl">Duración:</span> {dataProject.duration} Semanas</p>
          <p className="text-xl my-2"><span className="font-bold text-2xl">Fecha de inicio:</span> {dataProject.date}</p>
          <p className="text-xl my-2"><span className="font-bold text-2xl">Fecha de finalización:</span> {dataProject.finalDate}</p>
        <div>
            {
              dataProject.tags &&
              <div className="pt-4 pb-5 grid grid-cols-2 xl:grid-cols-5 gap-2">
                {(dataProject.tags).map((tag, index) => (
                  <div key={index} className='bg-gray-800 text-white text-sm font-medium px-2.5 py-1 rounded-full flex justify-center w-full'>
                    <div className="w-full text-center">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </div>

      <div className="container mx-auto">

        <div className="md:flex justify-center items-center mb-5 w-1/2 lg:w-1/3 mx-auto">
          <div className="w-0 md:w-2/6">

          </div>

          <h2 className="text-2xl font-bold text-center w-full md:w-4/6">Tareas</h2>

          <div className="w-full md:w-2/6 mx-auto mt-3 md:mt-0">
            <TasksModal
              dataProject={dataProject}
              setDataProject={setDataProject}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 lg:w-4/6 xl:w-1/2 mx-auto justify-center items-center gap-3 text-center mb-12 mt-10">
            <ScoreTasks 
              tasksCompleted={tasksCompleted}
              tasksPending={tasksPending}
              tasksDelayed={tasksDelayed}
            />
        </div>

        <div className={`bg-gray-100 rounded-lg container flex justify-center items-center mx-auto py-16 ${dataProject.tasks ? '' : 'h-40'}`}>
          {
            dataProject.tasks?.length !== 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4">

                {
                  dataProject.tasks?.map((task, index) => (
                    <div key={index}>
                      <TaskCard
                        task={task}
                        dataProject={dataProject}
                        setDataProject={setDataProject}
                      />
                    </div>
                  ))
                }

              </div>
            ) : (
              <p className="text-xl">No hay tareas</p>
            )
          }
        </div>

        {/* <Table
          dataProject={dataProject}
        /> */}
      </div>

      <div className="my-10">

      <div className="md:flex justify-center items-center mb-5 w-1/2 lg:w-1/3 mx-auto">
          <div className="w-0 md:w-2/6">

          </div>

          <h2 className="text-2xl font-bold text-center w-full md:w-4/6">Acciones</h2>

          <div className="w-full md:w-2/6 mx-auto mt-3 md:mt-0">
            <ActionsModal
              dataProject={dataProject}
              setDataProject={setDataProject}
            />
          </div>
        </div>


        <div className={`bg-gray-100 rounded-lg container sm:flex justify-center items-center mx-auto my-5 py-16 ${dataProject.actions ? '' : 'h-40'}`}>
           {
            dataProject.actions?.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                  dataProject.actions.map(action => (
                    <ActionCard
                      key={action.id}
                      action={action}
                    />
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

          <BoxFiles
            dataProject={dataProject}
            setDataProject={setDataProject}
          />
        </div>
        {/* verificar si hay archivos */}
      </div>
    </section>
  )
}

export default Project