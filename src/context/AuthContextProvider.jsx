import React, { createContext, useState, useEffect } from "react"
import { getLocalStorage, setLocalStorage } from "../components/utils/storageUtils"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage()
    setUserData(employees)
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider