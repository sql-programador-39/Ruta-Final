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

  const { setProjects, projects, setProject, project } = useProjects()

  const [dataProject, setDataProject] = useState({});
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [tasksPending, setTasksPending] = useState(0);
  const [tasksDelayed, setTasksDelayed] = useState(0);


  const { id } = useParams()


  useEffect(() => {
    const foundProject = projects.find((p) => p.id === id);
    if (foundProject) {
      setProject({ ...foundProject });
    }
  }, [])

  useEffect(() => {
    if (Object.keys(project).length === 0) return

    let completedCount = 0;
    let pendingCount = 0;
    let delayedCount = 0;

    project.tasks.forEach((task) => {
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
      p.id === id ? project : p
    );

    setProjects(updatedProjects);
  }, [project]);

  useEffect(() => { 
    if (Object.keys(project).length === 0) return

    const  newAction = {
      id: (Date.now()).toString(),
      action: "Se creo o modifico una tarea",
      responsable: "Juan Perez",
      date: new Date().toLocaleDateString()
    }

    if (project.tasks.length === 0) return
    setProject((prevProject) => ({
      ...prevProject,
      actions: [...(prevProject.actions || []), newAction],
    }))
  }, [project.tasks])

  useEffect(() => { 
    if (Object.keys(project).length === 0) return
    if (project.files.length === 0) return

    const  newAction = {
      id: (Date.now()).toString(),
      action: "Se agrego un archivo al proyecto",
      responsable: "Camilo Ardila",
      date: new Date().toLocaleDateString()
    }

    setProject((prevProject) => ({
      ...prevProject,
      actions: [...(prevProject.actions || []), newAction],
    }))
  }, [project.files])


  return (
    <section >
      <div className="grid grid-cols-2 m-auto h-screen container">
        <div className="m-auto w-1/2">
          <img
            className="w-full"
            src={ project.image }
            alt="Project image"
          />
        </div>

        <div className="my-auto">
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <p className="text-xl text-gray-500 pb-3 mb-2 border-b">{project.alias}</p>
          <p className="text-xl">{project.description}</p>
          <p className="text-xl my-2"><span className="font-bold text-2xl">Propietario:</span> {project.propietario}</p>
          <p className="text-xl my-2"><span className="font-bold text-2xl">Duración:</span> {project.duration} Semanas</p>
          <p className="text-xl my-2"><span className="font-bold text-2xl">Fecha de inicio:</span> {project.date}</p>
          <p className="text-xl my-2"><span className="font-bold text-2xl">Fecha de finalización:</span> {project.finalDate}</p>
        <div>
            {
              project.tags &&
              <div className="pt-4 pb-5 grid grid-cols-5 gap-2">
                {(project.tags).map((tag, index) => (
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

        <div className="flex justify-center items-center mb-5 w-1/3 mx-auto">
          <div className="w-1/4">

          </div>

          <h2 className="text-2xl font-bold text-center w-1/4">Tareas</h2>

          {/* verificar si hay tareas */}
          <div className="w-1/4">
            <TasksModal
              project={project}
              setProject={setProject}
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 text-center mb-16 mt-10">
            <ScoreTasks 
              tasksCompleted={tasksCompleted}
              tasksPending={tasksPending}
              tasksDelayed={tasksDelayed}
            />
        </div>

        <div className={`bg-gray-100 container flex justify-center items-center mx-auto my-5 py-16 ${dataProject.tasks ? '' : 'h-40'}`}>
          {
            project.tasks?.length !== 0 ? (
              <div className="grid grid-cols-3 gap-5 w-3/4">

                {
                  project.tasks?.map((task, index) => (
                    <div key={index}>
                      <TaskCard
                        task={task}
                        project={project}
                        setProject={setProject}
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

        <div className="flex justify-center items-center mb-5 w-1/3 mx-auto">
          <div className="w-1/4">

          </div>

          <h2 className="text-2xl text-center font-bold w-1/4 my-5">Acciones</h2>

          <div className="w-1/4">
            <ActionsModal
              project={project}
              setProject={setProject}
            />
          </div>
        </div>


        <div className={`bg-gray-100 container flex justify-center items-center mx-auto my-5 py-16 ${dataProject.actions ? '' : 'h-40'}`}>
           {
            project.actions?.length ? (
              <div className="grid grid-cols-3 gap-5">
                {
                  project.actions.map(action => (
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
            project={project}
            setProject={setProject}
          />
        </div>
        {/* verificar si hay archivos */}
      </div>
    </section>
  )
}

export default Project