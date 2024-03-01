import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  

 
    return(
      <>
      <nav>
      <h3> <span>W</span>ebmasters <span>L</span>earning</h3>
      <h6>Where Ideas Become Interactive Realities</h6>
 
   
      <ul class="nav justify-content-end  hu">
  <li class="nav-item">
    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
  </li>
  <li class="nav-item">
    <NavLink className="nav-link" to="/courses">Courses</NavLink>
  </li>
  <li class="nav-item">
    <NavLink className="nav-link" to="/about">About</NavLink>
  </li>
  <li class="nav-item">
    <NavLink className="nav-link" to='/contact'>Contact</NavLink>
  </li>
</ul>
</nav>
</>
    )

  }

  

  


export default Nav
