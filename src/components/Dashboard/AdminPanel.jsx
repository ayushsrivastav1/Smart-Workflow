import React from 'react'
import Navbar from '../other/Navbar'
import TaskCreator from '../other/TaskCreator'
import TaskOverview from '../other/TaskOverview'

function AdminPanel(props) {
  return (
    <div className='h-screen w-full p-7 bg-[#1E0F3B] from-gray-900 via-black to-gray-800 text-white overflow-auto'>
      <Navbar changeUser={props.changeUser} firstName="Admin"/>
      <TaskCreator />
      <TaskOverview />
    </div>
  )
}

export default AdminPanel