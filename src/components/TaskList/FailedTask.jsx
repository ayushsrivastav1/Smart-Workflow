import React from 'react'

function FailedTask({data}) {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg text-white'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-700 text-xs font-semibold px-3 py-1 rounded-lg shadow-md'>
          {data.category}
        </h3>
        <h4 className='text-sm opacity-80'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-xl font-bold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 opacity-90'>{data.taskDescription}</p>

      <div className='mt-5'>
        <button className='w-full bg-white text-red-600 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-red-100 transition'>
          Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask
