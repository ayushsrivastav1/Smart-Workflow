import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  return (
    <div 
      id='tasklist' 
      className = 'h-[55%] overflow-x-auto flex items-center gap-6 flex-nowrap justify-start w-full mt-10 p-4 rounded-xl bg-[#2A1E4D] shadow-md'
    >
      {data.tasks.map((elem, rdx) => {
        if(elem.active){
          return <AcceptTask key={rdx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={rdx} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={rdx} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={rdx} data={elem}/>
        }
      })}
    </div>
  )
}

export default TaskList