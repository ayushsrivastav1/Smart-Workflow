import React from 'react'

function FailedTask({ data }) {
  return (
    <div className='flex-shrink-0 h-full w-full sm:w-[300px] p-5 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg text-white'>

      <div className='flex flex-wrap sm:flex-nowrap justify-between items-center gap-2'>
        <h3 className='bg-red-700 text-xs font-semibold px-3 py-1 rounded-lg shadow-md'>
          {data.category}
        </h3>
        <h4 className='text-sm opacity-80'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-xl font-bold'>{data.taskTitle}</h2>

      <p className='text-sm mt-2 opacity-90'>
        {data.taskDescription}
      </p>

      <div className='mt-5 flex flex-wrap sm:flex-nowrap'>
        <button className='w-full sm:w-full bg-white text-red-600 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-red-100 transition'>
          Failed
        </button>
      </div>

    </div>
  )
}

export default FailedTask
