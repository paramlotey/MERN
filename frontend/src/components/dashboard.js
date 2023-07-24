import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const callDashboardPage = async () =>{
    try {
      const res = await fetch("/dashboard",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"apllication/json"
        },
        credentials:"include"
      })
      const data = await res.json();
      console.log(data)
      if(res.status !==200){
        const error = new Error(res.error)
        throw error
      }
    } catch (error) {
      console.log(error)
      navigate("/login")
    }
  }


  useEffect(()=>{
    callDashboardPage()
  },[])

  return (
    <div>dashboard</div>
  )
}

export default Dashboard