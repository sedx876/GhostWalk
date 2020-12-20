import React from 'react'
import '../styles/Development.css'
import DeadSlate from '../assets/DeadSlate.webp'
import FutureImperfect from '../assets/FutureImperfect.webp'
import TheEndWas from '../assets/TheEndWas.webp'
import HarvestBall from '../assets/HarvestBall.webp'

const Development = () => {

  return (
    <>
      <h2>Development</h2>
      <div class="card border-secondary mb-3">
        <div class="card-header">DEAD SLATE</div>
        <div class="card-body">
          <h5 class="card-title">Director: Staci Layne Wilson</h5>
          <h5 class="card-title">Screenwriter: Kerry Fleming</h5>
          <h5 class="card-title">Story By: Victoria & Tony Vardon</h5>
          <h5 class="card-title">Genre: Horror</h5>
            <img className="DeadSlate" 
            alt="DeadSlate" 
            src={DeadSlate}/>
            <p class="card-text">Lights, Camera, Murder The 
            "stereo-typical" cast of a slasher film production are 
            stalked by a mask wearing psychopath with each kill an 
            homage to classic horror film kill scenes.</p>
      </div>
      </div>

      <h2>Coming Soon...</h2>

      <div class="card border-secondary mb-3">
        <div class="card-header">Future Imperfect</div>
        <div class="card-body">
          <h5 class="card-title">Shooting Begins: June 2020</h5>
            <img className="FutureImperfect" 
            alt="FutureImperfect" 
            src={FutureImperfect}/> 
      </div>
      </div>

      <div class="card border-secondary mb-3">
        <div class="card-header">The End Was Then</div>
        <div class="card-body">
        <h5 class="card-title">Director: Rocky Karlage</h5>
        <h5 class="card-title">Screenwriter: Rocky Karlage</h5>
          <h5 class="card-title">Shooting Begins: May 2019</h5>
            <img className="TheEndWas" 
            alt="TheEndWas" 
            src={TheEndWas}/> 
      </div>
      </div>

      <div class="card border-secondary mb-3">
        <div class="card-header">The Harvest Ball</div>
        <div class="card-body">
        <h5 class="card-title">Director: Rocky Karlage</h5>
        <h5 class="card-title">Screenwriter: Rocky Karlage</h5>
          <h5 class="card-title">Shooting Begins: TBA</h5>
            <img className="HarvestBall" 
            alt="HarvestBall" 
            src={HarvestBall}/> 
      </div>
      </div>
    </>
  )
}

export default Development