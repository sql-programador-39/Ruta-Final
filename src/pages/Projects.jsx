import CardProyect from "../components/CardProyect"
import Modal from "../components/Modal"

import useProjects from "../hooks/useProjects"

const Projects = () => {

  const { projects } = useProjects()
 
  return (
    <>
      <section className="w-3/4 mx-auto my-10">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">Todos nuestros proyectos</h1>
        
          <Modal />
        </div>
        <div className="grid grid-cols-3">
          {projects.map((project) => (
            <CardProyect key={project.id} project={project} />
          ))}
        </div>
      </section> 
    </>
  )
}

export default Projects
