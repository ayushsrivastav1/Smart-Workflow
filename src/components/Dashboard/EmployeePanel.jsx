import React, { useContext } from "react"
import Navbar from "../other/Navbar"
import TaskContainer from "../other/TaskContainer"
import TaskList from "../TaskList/TaskList"
import { AuthContext } from "../../context/AuthContextProvider"

function EmployeePanel({ changeUser, loggedInUserId }) {
  const [userData] = useContext(AuthContext)
  const employee = userData.find(emp => emp.id === loggedInUserId)

  return (
    <div className="p-4 sm:p-10 h-screen bg-[#1E0F3B] text-white overflow-auto">
      <Navbar changeUser={changeUser} firstName={employee.firstName} />
      <div className="mt-4 sm:mt-6">
        <TaskContainer data={employee} />
      </div>
      <div className="mt-4 sm:mt-6">
        <TaskList data={employee} />
      </div>
    </div>
  )
}

export default EmployeePanel
