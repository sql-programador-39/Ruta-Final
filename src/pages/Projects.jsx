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
      <section className="w-3/4 mx-auto my-10">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">Todos nuestros proyectos</h1>
        
          <Modal />
        </div>

        <div className="mt-5">
          <SearchBar onSearch={handleSearch}  />
        </div>

        <div className="grid grid-cols-3">
          {filteredProjects.map((project) => (
            <CardProyect key={project.id} project={project} />
          ))}
        </div>
      </section> 
    </>
  )
}

export default Projects
