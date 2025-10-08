import React from 'react'

function AcceptTask({data}) {

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg text-white'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-blue-700 text-xs font-semibold px-3 py-1 rounded-lg shadow-md'>
          {data.category}
        </h3>
        <h4 className='text-sm opacity-80'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-xl font-bold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 opacity-90'>{data.taskDescription}</p>

      <div className='flex justify-between mt-5'>
        <button className='bg-green-500 hover:bg-green-600 py-1 px-3 text-sm rounded-md shadow-md'>
          Mark as Completed
        </button>
        <button className='bg-red-500 hover:bg-red-600 py-1 px-3 text-sm rounded-md shadow-md'>
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
