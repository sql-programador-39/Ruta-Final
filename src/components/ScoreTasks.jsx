const ScoreTasks = ({ tasksCompleted, tasksPending, tasksDelayed }) => {
  return (
    <>
     <div className=" bg-emerald-200 text-emerald-600 h-full w-full p-2 sm:p-5 mx-auto rounded-lg">
        <h3 className="w-full font-bold text-sm">Completas</h3>
        <p className="font-bold text-5xl">{tasksCompleted}</p>

      </div>

      <div className=" bg-yellow-200 text-yellow-600 h-full w-full p-2 sm:p-5 mx-auto rounded-lg">
        <h3 className="font-bold">Pendientes</h3>
        <p className="font-bold text-5xl">{tasksPending}</p>
      </div>

      <div className=" bg-red-200 text-red-600 h-full w-full p-2 sm:p-5 mx-auto rounded-lg">
        <h3 className="font-bold">Atrasadas</h3>
        <p className="font-bold text-5xl">{tasksDelayed}</p>
      </div> 
    </>
  )
}

export default ScoreTasks
