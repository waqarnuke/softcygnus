import React from 'react'
import {Link, NavLink,  Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='container-fluid nav-bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    SoftCygnus
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className={(navData) => navData.isActive ? "nav-link active" : "nav-link"  } to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  className={(navData) => navData.isActive ? "nav-link active " : "nav-link" } to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Service">Sevice</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  className="nav-link" to="/Contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>
        </div>
        <div>
           {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet />
        </div>
      </div>
    </>
   
  )
}

export default Navbar