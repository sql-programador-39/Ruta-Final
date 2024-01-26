import { useState, useEffect } from 'react';

const colorPalette = {
  "1": 'border-e-4 border-emerald-400',
  "2": 'border-e-4 border-yellow-400',
  "3": 'border-e-4 border-red-400',
}

const TaskCard = ({ task, dataProject, setDataProject }) => {
  const [colorClass, setColorClass] = useState(colorPalette[task.status] || colorPalette['pending']);

  useEffect(() => {
    setColorClass(colorPalette[task.status] || colorPalette['pending']);
  }, [task.status]);

  const handleDeleyed = () => {
    if (task.status !== "3" && task.status !== "1") {
      const updatedTasks = dataProject.tasks.map((item) => {
        if (item.id === task.id) {
          item.status = "3"; 
        }
        return item;
      });

      setDataProject((prevProject) => ({
        ...prevProject,
        tasks: updatedTasks,
      }));
      setColorClass(colorPalette['delayed']);
    }

  }

  const handleCompleted = () => {
    if (task.status !== "1") {
      const updatedTasks = dataProject.tasks.map((item) => {
        if (item.id === task.id) {
          item.status = "1"; 
        }
        return item;
      });

      setDataProject((prevProject) => ({
        ...prevProject,
        tasks: updatedTasks,
      }));
      setColorClass(colorPalette['completed']);
    }

  }

  const handlePending = () => {
    if (task.status !== "2" && task.status !== "1") {
      const updatedTasks = dataProject.tasks.map((item) => {
        if (item.id === task.id) {
          item.status = "2"; 
        }
        return item;
      });

      setDataProject((prevProject) => ({
        ...prevProject,
        tasks: updatedTasks,
      }));
      setColorClass(colorPalette['pending']);
    }
  }

  return (
    <>
      <div className={`bg-gray-800 text-white p-3 rounded-lg font-bold flex `}> 


          <div className={`text-center ${colorClass} pe-5 flex justify-center items-center w-11/12`}>
            {task.task}
          </div>

          <div className='grid justify-center items-center gap-1 ms-3 w-1/12'>
            <button 
              className="my-1" 
              onClick={handlePending} 
              name="pending"
              type='button'  
            >
              <div className='bg-yellow-200 text-yellow-600 py-1 px-2.5 rounded'>P</div>
            </button>
            <button 
              className="my-1.5" 
              onClick={handleDeleyed} 
              name="deleyed"
              type='button'
            >
              <span className='bg-red-200 text-red-600 py-1 px-2.5 rounded'>A</span>
            </button>
            <button 
              className="my-1.5" 
              onClick={handleCompleted} 
              name="completed" 
              type='button'
            >
              <span className='bg-emerald-200 text-emerald-600 py-1 px-2.5 rounded'>C</span>
            </button>
          </div>
        </div>     
    </>
  )
}

export default TaskCard
