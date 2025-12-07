import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContextProvider"

function AcceptTask({ data, employeeId }) {
  const [userData, setUserData] = useContext(AuthContext)
    const [done, setDone] = useState(false);

  const handleComplete = () => {
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

  const handleFail = () => {
    setDone(true);

    const updatedData = userData.map(emp => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map(task =>
          task.taskTitle === data.taskTitle ? { ...task, failed: true, active: false, newTask: false } : task
        );

        const updatedCounts = {
          ...emp.taskCounts,
          failed: emp.taskCounts.failed + 1,
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
    <div className='flex-shrink-0 h-full w-full sm:w-[300px] p-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg text-white'>
      <div className='flex flex-wrap sm:flex-nowrap justify-between items-center gap-2'>
        <h3 className='bg-blue-700 text-xs font-semibold px-3 py-1 rounded-lg shadow-md'>{data.category}</h3>
        <h4 className='text-sm opacity-80'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-xl font-bold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 opacity-90'>{data.taskDescription}</p>

      <div className='flex flex-wrap sm:flex-nowrap justify-between mt-5 gap-2'>
        <button onClick={handleComplete} className='w-full sm:w-auto bg-green-500 hover:bg-green-600 py-1 px-3 text-sm rounded-md shadow-md'>
          Mark as Completed
        </button>
        <button onClick={handleFail} className='w-full sm:w-auto bg-red-500 hover:bg-red-600 py-1 px-3 text-sm rounded-md shadow-md'>
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
