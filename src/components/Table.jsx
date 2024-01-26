import Sortable from 'sortablejs';
import {  useRef, useEffect  } from "react"

const Table = ({ dataProject }) => {

  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);

  useEffect(() => {
    const options = {
      animation: 200,
      group: 'shared',
      onEnd: (event) => {
        
        /* console.log('Item moved:', event); */
      },
    };

    Sortable.create(column1Ref.current, options);
    Sortable.create(column2Ref.current, options);
    Sortable.create(column3Ref.current, options);
  }, []);

  return (
    <>
       <section className="flex justify-center">
          <div className="flex w-3/4">
            <div className="flex w-full rounded-lg">
              <div className="w-1/3 mx-5">
                <h3 className='text-xl font-bold text-center mb-3'>Tareas Vigentes</h3>
                <div ref={column1Ref} className="cursor-pointer rounded bg-orange-500 p-5 min-h-60 h-auto">
                  {
                    dataProject.tasks ? (
                      <ul className="w-full">
                        {
                          dataProject.tasks.map((task, index)=> (
                            <div key={index} className='my-5 bg-slate-50 rounded-lg px-2 py-1'>
                              <p>
                                {task.task}
                              </p>

                              <p className='text-sm'>
                                {task.date}
                              </p>
                            </div>
                          ))
                        }
                      </ul>
                    ) : (
                      <p className="text-xl my-5 bg-slate-50 rounded-lg px-2 py-1">Agrega una nueva tarea</p>
                    )
                  }
                </div>
              </div>

              <div className="w-1/3 mx-5">
                <h3 className='text-xl font-bold text-center mb-3'>Tareas Atrasadas</h3>
                <div ref={column2Ref} className="cursor-pointer rounded bg-orange-500 p-5 min-h-60 h-auto">
                </div>
              </div>
              

              <div className="w-1/3 mx-5">
                <h3 className='text-xl font-bold text-center mb-3'>Tareas Vigentes</h3>
                <div ref={column3Ref} className="cursor-pointer rounded bg-orange-500 p-5 min-h-60 h-auto">
                </div>
              </div>  
            </div>
          </div>
        </section> 
    </>
  )
}

export default Table
