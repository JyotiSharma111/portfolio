import React, { useState } from 'react'

import { Link } from 'react-router-dom'
const Register = () => {
    const [name,setName]=useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();

        const users= JSON.parse(localStorage.getItem("users")) || []

        if(users.find((u)=> u.email===email)){
            alert("User already exist!");
            return
        }

        users.push({name, email, password});
        localStorage.setItem("users", JSON.stringify(users))

            alert("Registered successfully!");
    setName("");
    setEmail("");
    setPassword("");


    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className='font-bold text-3xl mb-6'>Register</h1>
        
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={name}
        placeholder='Enter your Full name'
        onChange={(e)=>setName(e.target.value)}
        required
        className='w-full p-2 border rounded mb-4'
        />
              <input 
        type="email"
        value={email}
        placeholder='Enter your email'
        onChange={(e)=>setEmail(e.target.value)}
        required
        className='w-full p-2 border rounded mb-4'
        />
              <input 
        type="password"
        value={password}
        placeholder='Enter your password'
        onChange={(e)=>setPassword(e.target.value)}
        required
        className='w-full p-2 border rounded mb-4'
        />
        
        <button className='w-full font-bold text-align-center border rounded-xl border-gray-600 p-2 hover:bg-gray-300'
        type="submit">Register</button>
        </form>   
       
       <p className='mt-4 text-gray-700'>
        Already have an account? {""}
        <Link to="/projects/auth/login" className="text-blue-600 hover:underline">
        Login</Link>
       </p>
       
       </div>
  )
}

export default Register