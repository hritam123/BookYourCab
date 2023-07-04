import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-dark navbar-dark" style={{padding:"8px 10px"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><h5 style={{fontSize:"150%", fontWeight:"400"}}>BookYourCab</h5></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto"> 
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/"><h5 style={{fontWeight:"300", marginRight:"10px"}}>Home</h5></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cabs"><h5 style={{fontWeight:"300", marginRight:"10px"}}>Cabs</h5></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Drivers"><h5 style={{fontWeight:"300", marginRight:"10px"}}>Drivers</h5></Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="#services"><h5 style={{fontWeight:"300", marginRight:"5px"}}>Services</h5></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#team"><h5 style={{fontWeight:"300", marginRight:"5px"}}>Our Team</h5></Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
