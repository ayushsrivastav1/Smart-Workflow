import React from 'react'
import Navbar from '../other/Navbar'
import TaskCreator from '../other/TaskCreator'
import TaskOverview from '../other/TaskOverview'

function AdminPanel(props) {
  return (
    <div className="h-screen w-full p-4 sm:p-7 bg-[#1E0F3B] text-white overflow-auto">
      <Navbar changeUser={props.changeUser} firstName="Admin" />

      <div className="mt-4 sm:mt-6">
        <TaskCreator />
      </div>

      <div className="mt-4 sm:mt-6">
        <TaskOverview />
      </div>
    </div>
  )
}

export default AdminPanel