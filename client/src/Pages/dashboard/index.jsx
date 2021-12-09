import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { logout } from "../../Actions/auth";
import { Button } from "../../components/Button";


const Dashboard = ({ setAuth }) =>{
  const userLogged = useSelector(state => state.authReducer.isLoggedIn)

  
  
  useEffect(()=>{
    setAuth(userLogged)
   },[userLogged])
   
  return(
    <>
      <h1>Dashboard</h1>
      <button onClick={()=>logout()}>Deconnexion</button>
    </>
  )
}

export default Dashboard;