const ActionCard = ({ action }) => {

  return (
    <>
      <div className="bg-gray-800 text-white p-2 rounded-lg w-full">
        <div className="text-xl font-bold">
          {action.action}
        </div>

        <div>
         <span className="font-bold">Responsable: </span> {action.responsable}
        </div>

        <div>
          {action.date}
        </div>
      </div>
    </>
  )
}

export default ActionCard
