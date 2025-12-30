import React from 'react'

function Navbar(props) {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className="flex items-center justify-between bg-[#2A1E4D] p-5 rounded-xl shadow-md flex-col sm:flex-row gap-4 sm:gap-0">

      <h1 className="text-xl sm:text-2xl font-medium text-white text-center sm:text-left">
        Hello👋<br />
        <span className="text-2xl sm:text-3xl font-semibold">{props.firstName}</span>
      </h1>

      <button
        onClick={logOutUser}
        className="px-6 py-2 text-base sm:text-lg font-medium rounded-xl bg-[#6C63FF] hover:bg-[#A78BFA] shadow-lg transition-all duration-300 w-full sm:w-auto"
      >
        Log Out
      </button>

    </div>
  )
}

export default Navbar