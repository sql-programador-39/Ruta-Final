import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NoImage from "./NoImage"

const CardProyect = ({project}) => {

  const { id, name, description, image, tags, alias, propietario, date, duration, finalDate } = project

  const [tagsList, setTagsList] = useState(tags)

  useEffect(() => {
    setTagsList(tags.map(tag => shortenText(tag, 10)))
    console.log(tagsList);
  }, [])

  const shortenText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`
    }
    return text
  }

  return (
    <>
      <article className="rounded-lg overflow-hidden shadow-md hover:shadow-xl card-tranform w-11/12 md:w-full mx-auto">
        <Link to={`/projects/${id}`}>
          <header>
            {
              image ? (
                <img
                  className="w-full"
                  src={ image }
                  alt="project image"
                />
              ) : (
                <NoImage />
              )
            }
          </header>

          <main className="">
            <div className="text-gray-700 text-base px-6 mt-5">
              <div className="font-bold text-xl mb-2">{name}</div>
              <p className=" mb-2">
                <span className="font-bold">Descripción: </span>
                {description}
              </p>

              <p className="border-t-2 pt-2">
                <span className="font-bold">Alias: </span>
                {alias}
              </p>

              <p>
                <span className="font-bold">Propietario: </span>
                {propietario}
              </p>

              <p>
                <span className="font-bold">Fecha de inicio: </span>
                {date}
              </p>

              <p>
                <span className="font-bold">Duración: </span>
                {duration} Semanas
              </p>

              <p>
                <span className="font-bold">Fecha de finalización: </span>
                {finalDate}
              </p>
            </div>
          </main>

          <footer className="">
            <div className="px-6 mt-5 mb-5 grid grid-cols-2 ">
              {tagsList.map((tag, index) => (
                <div key={index} className="my-1 mx-1">
                  <span className='bg-gray-800 text-white text-sm px-2.5 py-1 rounded-full flex justify-center w-full'>
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </footer>
        </Link>
      </article>
    </>
  )
}

export default CardProyect
