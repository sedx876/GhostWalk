import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import cameo from '../assets/cameo.png'
import redmoon from '../assets/redmoon.png'
import kredmoon from '../assets/kredmoon.png'

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
      <img className='redmoon' src={kredmoon} alt='redmoon'/>About
    </NavLink>
  </li>

  <li>
    <NavLink className='bts'
    exact activeClassName='active'
    to='/bts'>
      <img className='redmoon' src={kredmoon} alt='redmoon'/>Behind the Scenes
    </NavLink>
  </li>

  <li>
    <NavLink className='press' 
    exact activeClassName='active' 
    to='/press'>
      <img className='redmoon' src={kredmoon} alt='redmoon'/>Press
    </NavLink>
  </li>

  <li>
    <NavLink className='films' 
    exact activeClassName='active' 
    to='/films'>
      <img className='redmoon' src={kredmoon} alt='redmoon'/>Films
    </NavLink>
  </li>

  <li>
    <NavLink className='development' 
    exact activeClassName='active' 
    to='/development'>
      <img className='redmoon' src={kredmoon} alt='redmoon'/>Development
    </NavLink>
  </li>

  <li>
    <NavLink className='news' 
    exact activeClassName='active' 
    to='/news'>
      <img className='redmoon' src={kredmoon} alt='redmoon'/>News
    </NavLink>
  </li>

  <li>
    <NavLink className='more' 
    exact activeClassName='active' 
    to='/more'>
      <img className='redmoon' src={kredmoon} alt='redmoon'/>More
    </NavLink>
  </li>

  <li>
    <NavLink className='contact' 
    exact activeClassName='active' 
    to='/contact'>
      <img className='redmoon' src={kredmoon} alt='redmoon'/>Contact
    </NavLink>
  </li>

</ul>
</div>
  )
}

export default Navbar