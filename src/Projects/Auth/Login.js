import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]=useState("")
  const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const users=JSON.parse(localStorage.getItem("users")) || []
         const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user))
      navigate("/projects/horoscope")
      setEmail("");
      setPassword("");
      
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className='font-bold text-3xl mb-6'>Existing user? Login</h1>
        
    <form onSubmit={handleSubmit}>
      
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
        type="submit">Login</button>
        </form>   
       
             <p className="mt-4 text-gray-700">
        Don't have an account?{" "}
        <Link to="/projects/auth/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>
       </div>
  )
}

export default Login