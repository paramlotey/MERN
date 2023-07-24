import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <div>
            <h1>Error 404 NOT Found</h1>
            <NavLink to="/">Return to Homepage</NavLink>
        </div>
    </>
  )
}

export default ErrorPage