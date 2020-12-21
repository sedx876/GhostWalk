import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import cameo from '../assets/cameo.png'

const Navbar = () => {

  return(
 

<div class="navbar">
<a class="logo" href="#"><img className='cameo' src={cameo}/> Ghost Walk</a>
<ul class="nav">
  <li><a href="#home">About</a></li>
  <br></br>
  <li><a href="#about">Behind the Scenes</a></li>
  <li><a href="#portfolio">Press</a></li>
  <li><a href="#services">Films</a></li>
  <li><a href="#contact">Development</a></li>
  <li><a href="#contact">News</a></li>
  <li><a href="#contact">More</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
</div>
  )
}

export default Navbar