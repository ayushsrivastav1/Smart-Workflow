import React from "react"
import AcceptTask from "./AcceptTask"
import NewTask from "./NewTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"

function TaskList({ data }) {
  return (
    <div className='h-auto sm:h-[55%] overflow-x-auto flex flex-wrap sm:flex-nowrap items-center gap-6 justify-start w-full mt-10 p-4 rounded-xl bg-[#2A1E4D] shadow-md'>
      {data.tasks.map((task, idx) => {
        const taskProps = { data: task, employeeId: data.id }
        if (task.active) return <AcceptTask key={idx} {...taskProps} />
        if (task.newTask) return <NewTask key={idx} {...taskProps} />
        if (task.completed) return <CompleteTask key={idx} {...taskProps} />
        if (task.failed) return <FailedTask key={idx} {...taskProps} />
        return null
      })}
    </div>
  )
}

export default TaskList