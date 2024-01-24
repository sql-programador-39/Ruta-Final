import { useState, useEffect } from 'react';

const colorPalette = {
  completed: 'bg-emerald-200',
  pending: 'bg-yellow-200',
  delayed: 'bg-red-200',
}

const TaskCard = ({task, dataProject, setDataProject}) => {
  const [colorClass, setColorClass] = useState(colorPalette[task.status] || colorPalette['pending']);

  const handleDeleyed = () => {
    if (task.status !== "3" && task.status !== "1") {
      const updatedTasks = dataProject.tasks.map((item) => {
        if (item.id === task.id) {
          item.status = "3"; // Cambiar a estado pendiente solo si no está pendiente actualmente
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
          item.status = "1"; // Cambiar a estado pendiente solo si no está pendiente actualmente
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
          item.status = "2"; // Cambiar a estado pendiente solo si no está pendiente actualmente
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
      <div className={`${colorClass} p-3 h-full rounded-lg font-bold flex items-center justify-center`}> 
        <div className="flex flex-col">

          <div className='pb-3 text-center'>
            {task.task}
          </div>

          <div className=''>
            <button className="mx-1" onClick={handlePending} name="pending">
              <div className='bg-yellow-500 py-1 px-2 rounded-3xl'>P</div>
            </button>
            <button className="mx-1" onClick={handleDeleyed} name="deleyed">
              <span className='bg-red-500 py-1 px-2 rounded-3xl'>A</span>
            </button>
            <button className="mx-1" onClick={handleCompleted} name="completed">
              <span className='bg-emerald-500 py-1 px-2 rounded-3xl'>C</span>
            </button>
          </div>
        </div>     
      </div> 
    </>
  )
}

export default TaskCard
