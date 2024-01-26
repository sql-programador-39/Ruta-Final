import { Link } from 'react-router-dom'
import LogoOpa from '../assets/Logo-opa.png'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-4xl font-bold my-10 text-center">Consulta todos nuestros proyectos</h1>
        <img src={LogoOpa} alt="" className='m-10 w-3/4 md:w-1/2' />
        <Link to="/projects" className='bg-gray-800 hover:bg-gray-900 text-white my-10 font-bold py-2 px-4 rounded-lg w-1/2 lg:w-1/5 text-center'>Proyectos</Link>
      </div>
    </div>
  )
}

export default Home
