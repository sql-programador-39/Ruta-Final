import { Link } from "react-router-dom"
import LogoReact from "../assets/logo-react.jpg"

import useProjects from "../hooks/useProjects"

const CardProyect = () => {

  const { projects } = useProjects()

  return (
    <>
      <Link to="/projects/1">
        <article className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
          <header>
            <img className="w-full" src={LogoReact} alt="Sunset in the mountains" />
          </header>

          <main>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </main>

          <footer>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </footer>
        </article>
      </Link>
    </>
  )
}

export default CardProyect


