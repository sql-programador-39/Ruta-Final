
const ScoreTasks = ({ tasksCompleted, tasksPending, tasksDelayed }) => {
  return (
    <>
     <div className=" bg-emerald-200 text-emerald-600 w-44 p-5 rounded-lg">
        <h3 className="font-bold">Completadas</h3>
        <p className="font-bold text-5xl">{tasksCompleted}</p>

      </div>

      <div className=" bg-yellow-200 text-yellow-600 h-full w-44  p-5 rounded-lg">
        <h3 className="font-bold">Pendientes</h3>
        <p className="font-bold text-5xl">{tasksPending}</p>
      </div>

      <div className=" bg-red-200 text-red-600 h-full p-5 w-44  rounded-lg">
        <h3 className="font-bold">Atrasadas</h3>
        <p className="font-bold text-5xl">{tasksDelayed}</p>
      </div> 
    </>
  )
}

export default ScoreTasks
