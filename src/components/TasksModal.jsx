import { useState } from 'react'
import RichText from './RichText'

const TasksModal = ({dataProject, setDataProject}) => {

  const [showModal, setShowModal] = useState(false)

  const [task, setTask] = useState("")
  const [status, setStatus] = useState("1")

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(false)

    const newTask = {
      task,
      status
    }

    setDataProject((prevProject) => ({
      ...prevProject,
      tasks: [...(prevProject.tasks || []), newTask],
    }))

    setTask('')
  }

  return (
    <>
      <button 
        onClick={() => setShowModal(true)}
        type='button'
        className="bg-orange-500 text-white ms-5 py-1 px-3 rounded font-bold shadow-lg hover:bg-orange-600"
      >
        Nueva Tarea
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-3/4 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Nueva Tarea
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-5 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form action="" >
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task">
                        Tarea:
                      </label>
                      <div className='my-1'>
                      <RichText 
                        value={task}
                        set={setTask}
                      />
                    </div>
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
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Agregar Tarea
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

export default TasksModal
