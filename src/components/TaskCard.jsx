const TaskCard = ({task, status}) => {

  const handleClick = () => {
    
  }

  return (
    <>
      <div className={`${ status === "1" ? "bg-emerald-200" : "bg-red-200" } h-24 text-white rounded-lg flex justify-center items-center font-bold`}> 
        <div className="flex justify-between items-center">
          {task}
          <button className="ms-5" onClick={handleClick}>
            x
          </button>
        </div>     
      </div> 
    </>
  )
}

export default TaskCard
