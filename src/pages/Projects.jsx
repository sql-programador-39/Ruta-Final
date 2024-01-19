import CardProyect from "../components/CardProyect"

import useProjects from "../hooks/useProjects"

const Projects = () => {

  const { projects } = useProjects()

 
  return (
    <>
      <section className="w-3/4 grid grid-cols-3 mx-auto">
        <CardProyect />
        <CardProyect />
        <CardProyect />
        <CardProyect />
        <CardProyect />
        <CardProyect />
      </section> 
    </>
  )
}

export default Projects
