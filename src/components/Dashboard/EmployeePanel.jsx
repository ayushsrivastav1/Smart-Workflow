import React from 'react'
import TaskList from '../TaskList/TaskList'
import Navbar from '../other/Navbar'
import TaskContainer from '../other/TaskContainer'

function EmployeePanel(props) {
  return (
    <div className='p-10 h-screen bg-[#1E0F3B] text-white overflow-hidden'>
      
      <Navbar changeUser={props.changeUser} firstName={props.data.firstName}/>
      <TaskContainer data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeePanel