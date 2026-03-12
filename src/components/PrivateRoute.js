import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
 const loggedInUser=localStorage.getItem("loggedInUser");

 if (!loggedInUser){
    return <Navigate to="/projects/auth/login" />
 }
 
 
    return children;
  
}

export default PrivateRoute