import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContextProvider'

const TaskOverview = () => {

  const [userData, setUserData] = useContext(AuthContext)


  return (
    <div className='bg-[#2A1E4D] p-5 rounded-lg mt-5 shadow-md'>

      {/* HEADER ROW */}
      <div className='bg-[#3A1E6E] mb-2 py-2 px-4 flex flex-wrap sm:flex-nowrap justify-between rounded text-center sm:text-left'>

        <h2 className='text-lg font-medium w-1/2 sm:w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/2 sm:w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/2 sm:w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/2 sm:w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/2 sm:w-1/5'>Failed</h5>

      </div>

      {/* DATA ROWS */}
      <div>
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className='border border-[#6C63FF] mb-2 py-2 px-4 flex flex-wrap sm:flex-nowrap justify-between rounded-md text-white bg-[#1E0F3B] text-center sm:text-left'
            >
              <h2 className='text-lg font-medium w-1/2 sm:w-1/5'>{elem.firstName}</h2>
              <h3 className='text-lg font-medium w-1/2 sm:w-1/5'>{elem.taskCounts.newTask}</h3>
              <h5 className='text-lg font-medium w-1/2 sm:w-1/5'>{elem.taskCounts.active}</h5>
              <h5 className='text-lg font-medium w-1/2 sm:w-1/5'>{elem.taskCounts.completed}</h5>
              <h5 className='text-lg font-medium w-1/2 sm:w-1/5'>{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default TaskOverview