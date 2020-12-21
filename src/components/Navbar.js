import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import cameo from '../assets/cameo.png'

const Navbar = () => {

  return(
 

<div class="navbar">
  <NavLink className="logo" exact 
    activeClassName='active' 
    to='/'>
    <img className='cameo' src={cameo} alt='cameo'/> 
    Ghost Walk
  </NavLink>

<ul class="nav">
  <li>
    <NavLink className='about' 
    exact activeClassName='active' 
    to='/about'>
      About
    </NavLink>
  </li>

  <li>
    <NavLink className='bts'
    exact activeClassName='active'
    to='/bts'>
      Behind the Scenes
    </NavLink>
  </li>

  <li><a href="#portfolio">Press</a></li>

  <li>
    <NavLink className='films' 
    exact activeClassName='active' 
    to='/films'>
      Films
    </NavLink>
  </li>

  <li>
    <NavLink className='development' 
    exact activeClassName='active' 
    to='/development'>
      Development
    </NavLink>
  </li>

  <li>
    <NavLink className='news' 
    exact activeClassName='active' 
    to='/news'>
      News
    </NavLink>
  </li>

  <li>
    <NavLink className='more' 
    exact activeClassName='active' 
    to='/more'>
      More
    </NavLink>
  </li>

  <li>
    <NavLink className='contact' 
    exact activeClassName='active' 
    to='/contact'>
      Contact
    </NavLink>
  </li>
  
</ul>
</div>
  )
}

export default Navbar