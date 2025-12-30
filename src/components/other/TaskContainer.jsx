import React from "react"

function TaskContainer({ data }) {
  return (
    <div className="flex flex-wrap mt-10 justify-between gap-5">

      <div className="rounded-xl w-full sm:w-[48%] py-6 px-9 bg-gradient-to-r from-slate-600 to-slate-500">
        <h2 className="text-3xl font-bold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Pending Tasks</h3>
      </div>

      <div className="rounded-xl w-full sm:w-[48%] py-6 px-9 bg-gradient-to-r from-emerald-600 to-emerald-500">
        <h2 className="text-3xl font-bold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Completed Today</h3>
      </div>

      <div className="rounded-xl w-full sm:w-[48%] py-6 px-9 bg-gradient-to-r from-indigo-600 to-indigo-500">
        <h2 className="text-3xl text-black font-bold">{data.taskCounts.active}</h2>
        <h3 className="text-xl mt-0.5 font-medium">In Progress</h3>
      </div>

      <div className="rounded-xl w-full sm:w-[48%] py-6 px-9 bg-gradient-to-r from-rose-500 to-rose-400">
        <h2 className="text-3xl font-bold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Rejected</h3>
      </div>

    </div>
  )
}

export default TaskContainer
