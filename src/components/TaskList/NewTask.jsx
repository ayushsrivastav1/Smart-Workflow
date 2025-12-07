import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContextProvider'

function NewTask({ data, employeeId }) {

  const [userData, setUserData] = useContext(AuthContext);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleAccept = () => {
    setIsDisabled(true)

    const updated = userData.map(emp => {
      if (emp.id === employeeId) {
        return {
          ...emp,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active + 1,     
            newTask: emp.taskCounts.newTask - 1  
          }
        }
      }
      return emp;
    });

    setUserData(updated);
    localStorage.setItem("employees", JSON.stringify(updated));
  };


  return (
    <div className='flex-shrink-0 h-full w-full sm:w-[300px] p-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg text-white'>

      <div className='flex flex-wrap sm:flex-nowrap justify-between items-center gap-2'>
        <h3 className='bg-orange-600 text-xs font-semibold px-3 py-1 rounded-lg shadow-md'>
          {data.category}
        </h3>
        <h4 className='text-sm opacity-80'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-xl font-bold'>{data.taskTitle}</h2>

      <p className='text-sm mt-2 opacity-90'>
        {data.taskDescription}
      </p>

      <div className='mt-5 flex flex-wrap sm:flex-nowrap'>
        <button
          onClick={handleAccept}
          disabled={isDisabled}
          className='w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 py-1 px-3 text-sm rounded-md shadow-md'
        >
          Accept Task
        </button>
      </div>

    </div>
  )
}

export default NewTask