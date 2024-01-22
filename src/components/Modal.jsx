import { useState } from 'react'
import useProjects from '../hooks/useProjects'

const Modal = () => {

  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [client, setClient] = useState("")
  const [phone, setPhone] = useState("")
  const [leader, setLeader] = useState("")
  /*const [tags, setTags] = useState([])
  const [tasks, setTasks] = useState([])
  const [actions, setActions] = useState([])
  const [files, setFiles] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [inProgressTasks, setInProgressTasks] = useState([])
  const [overdueTasks, setOverdueTasks] = useState([]) */

  const { setProject } = useProjects()
  

  const handleChange = (e) => {
    const {name, value} = e.target

    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'description':
        setDescription(value)
        break;
      case 'client':
        setClient(value)
        break;
      case 'phone':
        setPhone(value)
        break;
      case 'leader':
        setLeader(value)
        break;
      default:
        break;

    }

  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(false)

    const newProject = {
      id: (Date.now()).toString(),
      name,
      description,
      image: "https://picsum.photos/200/200",
      client,
      phone,
      leader
    }

    setProject(newProject)
  }

  return (
    <>
      <button 
        onClick={() => setShowModal(true)}
        type='button'
        className="bg-orange-200 ms-5 py-3 px-1 rounded"
      >
        + Agregar Proyecto
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Agregar Nuevo Proyecto
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form action="" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Nombre del proyecto"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Descripción:
                      </label>
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                        id="description"
                        type="text"
                        name="description"
                        placeholder="Descripción del proyecto"
                        onChange={handleChange}
                      />
                    </div>

                    
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client">
                        Cliente:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="client"
                        type="text"
                        name="client"
                        placeholder="Cliente"
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Telefono:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                        name="phone"
                        placeholder="Telefono del Cliente"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leader">
                        Encargado del Proyecto:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="leader"
                        type="text"
                        name="leader"
                        placeholder="Encargado del Proyecto"
                        onChange={handleChange}
                      />
                    </div>
                    <div>

                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Agregar Proyecto
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default Modal
