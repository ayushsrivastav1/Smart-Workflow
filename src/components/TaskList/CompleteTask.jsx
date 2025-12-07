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
        <div className='flex-shrink-0 h-full w-full sm:w-[300px] p-5 bg-blue-400 rounded-xl'>

            <div className='flex flex-wrap sm:flex-nowrap justify-between items-center gap-2'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>

            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>

            <div className='mt-5 flex flex-wrap sm:flex-nowrap gap-2'>
                <button onClick={handleComplete} className='w-full sm:w-auto bg-green-500 hover:bg-green-600 py-1 px-3 text-sm rounded-md shadow-md'>
                    Complete
                </button>
            </div>

        </div>
    )
}

export default CompleteTask