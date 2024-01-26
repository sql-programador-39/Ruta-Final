import { useState } from "react"

import CardProyect from "../components/CardProyect"
import Modal from "../components/Modal"
import SearchBar from "../components/SearchBar"

import useProjects from "../hooks/useProjects"


const Projects = () => {

  const { projects } = useProjects()

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <section className="container mx-auto my-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Todos nuestros proyectos</h1>

        </div>

        <div className="my-10 w-3/4 mx-auto md:flex items-center justify-center">

          <div className="w-0 md:w-1/4"></div>

          <div className="w-full md:w-2/4">
            <SearchBar onSearch={handleSearch}  />
          </div>

          <div className="w-full md:w-1/4">
            <Modal />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-10">

          {
            projects.length === 0 && searchTerm.length === 0 ? (
              <div className="text-center col-span-4">
                <h2 className="text-2xl font-bold">No hay proyectos</h2>
              </div>
            ) : (
              <></>
            )
          }

          {
            filteredProjects.length === 0 && searchTerm.length !==0 ? (
              <div className="text-center col-span-4">
                <h2 className="text-2xl font-bold">No hay resultados...</h2>
              </div>
            ) : (
              <>
                {filteredProjects.map((project) => (
                  <CardProyect key={project.id} project={project} />
                 ))}
              </>
            )
          }

          
        </div>
      </section>
    </>
  )
}

export default Projects
