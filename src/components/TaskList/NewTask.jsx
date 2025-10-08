import React from 'react'

function NewTask({data}) {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg text-white'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-orange-600 text-xs font-semibold px-3 py-1 rounded-lg shadow-md'>
          {data.category}
        </h3>
        <h4 className='text-sm opacity-80'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-xl font-bold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 opacity-90'>{data.taskDescription}</p>

      <div className='mt-5'>
        <button className='bg-indigo-600 hover:bg-indigo-700 py-1 px-3 text-sm rounded-md shadow-md'>
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask