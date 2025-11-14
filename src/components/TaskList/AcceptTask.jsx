import React from 'react'

function AcceptTask({ data }) {

  return (
    <div className='flex-shrink-0 h-full w-full sm:w-[300px] p-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg text-white'>

      <div className='flex flex-wrap sm:flex-nowrap justify-between items-center gap-2'>
        <h3 className='bg-blue-700 text-xs font-semibold px-3 py-1 rounded-lg shadow-md'>
          {data.category}
        </h3>
        <h4 className='text-sm opacity-80'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-xl font-bold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 opacity-90'>{data.taskDescription}</p>

      <div className='flex flex-wrap sm:flex-nowrap justify-between mt-5 gap-2'>
        <button className='w-full sm:w-auto bg-green-500 hover:bg-green-600 py-1 px-3 text-sm rounded-md shadow-md'>
          Mark as Completed
        </button>
        <button className='w-full sm:w-auto bg-red-500 hover:bg-red-600 py-1 px-3 text-sm rounded-md shadow-md'>
          Mark as Failed
        </button>
      </div>

    </div>
  )
}

export default AcceptTask