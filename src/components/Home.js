import React from 'react'
import '../styles/Home.css'
//import '../styles/Enter.css'
import gothDoor from '../assets/gothDoor.png'

const Home = () => {

  return (
    <div className="background-container">
    <div>
    <div class="stars">
<div className="twinkling"></div>
<div className="clouds"></div>
<div className="name">
  <span id="L">G</span>
  <span id="I">H</span>
  <span id="G">O</span>
  <span id="H">S</span>
  <span id="T">T</span>
  
  <span id="H">W</span>
  <span id="G">A</span>
  <span id="H">L</span>
  <span id="T">K</span>
  </div>
  <br />
  <br />
  <div className="img-container"><img className="gothDoor" alt="gothDoor" src={gothDoor}/></div>
</div>
</div>
</div>
  )
}

export default Home