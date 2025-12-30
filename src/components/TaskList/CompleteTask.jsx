import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContextProvider';

const CompleteTask = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext);
    const [done, setDone] = useState(data.completed || data.failed);

    const handleComplete = ({ data, employeeId }) => {
    setDone(true);

    const updatedData = userData.map(emp => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map(task =>
          task.taskTitle === data.taskTitle ? { ...task, completed: true, active: false, newTask: false } : task
        );

        const updatedCounts = {
          ...emp.taskCounts,
          completed: emp.taskCounts.completed + 1,
          active: emp.taskCounts.active > 0 ? emp.taskCounts.active - 1 : 0,
          newTask: emp.taskCounts.newTask > 0 ? emp.taskCounts.newTask - 1 : 0
        };

        return { ...emp, tasks: updatedTasks, taskCounts: updatedCounts };
      }
      return emp;
    });

    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData));
  };

    return (
        <div className='flex-shrink-0 min-h-56 w-full sm:w-[300px] p-5 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl'>

            <div className='flex flex-wrap sm:flex-nowrap justify-between items-center gap-2'>
                <h3 className='bg-red-600 text-xs font-semibold px-3 py-1 rounded-lg shadow-md'>{data.category}</h3>
                <h4 className='text-sm opacity-80'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-5 text-xl font-bold'>{data.taskTitle}</h2>

            <p className='text-sm mt-2 opacity-90'>
                {data.taskDescription}
            </p>

            <div className='mt-5 flex flex-wrap sm:flex-nowrap gap-2'>
                <button onClick={handleComplete} className='w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 font-semibold py-2 px-4 text-sm rounded-md shadow-md'>
                    Complete
                </button>
            </div>

        </div>
    )
}

export default CompleteTask