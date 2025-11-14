import React from 'react'
import TaskList from '../TaskList/TaskList'
import Navbar from '../other/Navbar'
import TaskContainer from '../other/TaskContainer'

function EmployeePanel(props) {
  return (
    <div className="p-4 sm:p-10 h-screen bg-[#1E0F3B] text-white overflow-auto">

      <Navbar changeUser={props.changeUser} firstName={props.data.firstName} />

      <div className="mt-4 sm:mt-6">
        <TaskContainer data={props.data} />
      </div>

      <div className="mt-4 sm:mt-6">
        <TaskList data={props.data} />
      </div>

    </div>

  )
}

export default EmployeePanel