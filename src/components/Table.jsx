import Sortable from 'sortablejs';
import {  useRef, useEffect, useState  } from "react"

const Table = () => {

  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);

  useEffect(() => {
    const options = {
      animation: 200,
      group: 'shared',
      onEnd: (event) => {
        // Lógica para manejar el cambio de orden
        console.log('Item moved:', event);
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
                <div ref={column1Ref} className="cursor-pointer rounded bg-orange-300 p-5">
                  <div className='my-5 bg-slate-300'>Item 1</div>
                  <div className='my-5 bg-slate-300'>Item 2</div>
                  <div className='my-5 bg-slate-300'>Item 3</div>
                </div>
              </div>

              <div className="w-1/3 mx-5">
                <h3 className='text-xl font-bold text-center mb-3'>Tareas Atrasadas</h3>
                <div ref={column2Ref} className="cursor-pointer rounded bg-orange-300 p-5">
                  <div className='my-5 bg-slate-300'>Item 4</div>
                  <div className='my-5 bg-slate-300'>Item 5</div>
                  <div className='my-5 bg-slate-300'>Item 6</div>
                </div>
              </div>

              <div className="w-1/3 mx-5">
                <h3 className='text-xl font-bold text-center mb-3'>Tareas Vigentes</h3>
                <div ref={column3Ref} className="cursor-pointer rounded bg-orange-300 p-5">
                  <div className='my-5 bg-slate-50 rounded-lg px-2 py-1'>
                    <p>Esta tarea es para realizar los estilos del la ruta final de react js</p>
                    <p className='text-sm'>Fecha de inicio: 12/12/2021</p>
                  </div>
                  <div className='my-5 bg-slate-200'>Item 8</div>
                  <div className='my-5 bg-slate-200'>Item 9</div>
                </div>
            </div>
              </div>
          </div>
        </section> 
    </>
  )
}

export default Table
