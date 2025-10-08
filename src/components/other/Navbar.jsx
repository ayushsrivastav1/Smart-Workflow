import React from 'react'

function Navbar(props) {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex items-center justify-between bg-[#2A1E4D] p-5 rounded-xl shadow-md'>
      
      <h1 className='text-2xl font-medium text-white'>
        Hello <br />
        <span className='text-3xl font-semibold'>{props.firstName}</span>
      </h1>

      <button 
        onClick={logOutUser} 
        className='px-6 py-2 text-lg font-medium rounded-xl bg-[#6C63FF] hover:bg-[#A78BFA] shadow-lg transition-all duration-300'
      >
        Log Out
      </button>

    </div>
  )
}

export default Navbar