import React from 'react'
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <header className='header'>
        <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid"> 
          <a class="navbar-brand" href="#">Pankaj</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink class="nav-link active" to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link active" to="/about">About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link active" to="/skills">Skills</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link active" to="/services">Services</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link active" to="/portfolio">Portfolio</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link active" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </header>
    </div>
  )
}

export default Navbar
