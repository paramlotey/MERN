import React from 'react'

function Footer() {
    return (
        <>
           <footer className="bg-danger text-center text-lg-start fixed-bottom">
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2020 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  {/* Copyright */}
</footer>

        </>
    )
}

export default Footer