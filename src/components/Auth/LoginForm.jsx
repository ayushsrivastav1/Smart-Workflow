import React, { useState } from 'react'

const LoginForm = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[#1E0F3B]'>
        <div className='border-2 rounded-xl border-[#6C63FF] p-16 bg-[#2A1E4D] shadow-lg'>
            <form 
            onSubmit={(e)=>{submitHandler(e)}}
            className='flex flex-col items-center justify-center'
            >
                <input 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                required
                className='outline-none bg-transparent border-2 border-[#6C63FF]  font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
                <input
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                required
                className='outline-none bg-transparent border-2 border-[#6C63FF]  font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' 
                />
                <button className='mt-7 border-none outline-none bg-[#6C63FF] hover:bg-[#A78BFA] text-lg py-2 px-8 w-full rounded-full'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default LoginForm