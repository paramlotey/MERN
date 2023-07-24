import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Shownavbar = ({children}) => {
    const location=useLocation();

    const [show,setShow]=useState(false)

    useEffect(() => {
      if(location.pathname==="/login"  || location.pathname==="/admin"){
        setShow(false)
      }
      else{
        setShow(true)
      }
    }, [location])
    
  return (
    <div>{show && children}</div>
  )
}

export default Shownavbar