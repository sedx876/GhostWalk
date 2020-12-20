import React from 'react'
import '../styles/Films.css'
import ET from '../assets/ET.webp'
import ER from '../assets/ER.webp'
import LC from '../assets/LC.webp'
import TF from '../assets/TF.webp'
import TL from '../assets/TL.webp'

const Films = () => {

  return (
    <>
      <h2>Films</h2>
      <div class="card border-secondary mb-3">
        <div class="card-header">Maggie Shaye's Embrace the Twilight</div>
        <div class="card-body">
          <h5 class="card-title">Director: Carlos Dunn</h5>
          <h5 class="card-title">Screenwriter: Carlos Dunn</h5>
          <h5 class="card-title">Genre: Drama/Action/Horror</h5>
            <img className="ET" 
            alt="ET" 
            src={ET}/>
            <p class="card-text">IA film based on New York Times 
            bestselling author Maggie Shayne's "Embrace the 
            Twilight." Experience has taught Sarafina that love 
            leads only to betrayal and heartbreak. She has vowed to 
            never allow herself to fall in love again. She brags 
            that she has cured herself of that flaw. Then Colonel 
            Willem Stone comes into her life, a man as boldly alive 
            as she is, and a man with an unbreakable the will of 
            iron. The only thing stronger than the clash of their 
            wills is the power of their desire. When the child of 
            promise is kidnapped, they must put aside their struggle 
            and combine their strengths in a rescue attempt that 
            could cost them their lives. And in the process they 
            discover the most powerful force of all. Love.</p>
      </div>
      </div>

      <div class="card border-secondary mb-3">
        <div class="card-header">Estella's Revenge</div>
        <div class="card-body">
          <h5 class="card-title">Directors: Carlos Dunn/Steve Olander</h5>
          <h5 class="card-title">Screenwriter: Rocky Karlage</h5>
          <h5 class="card-title">Genre: Thriller/Horror/Mystery/Drama</h5>
            <img className="ER" 
            alt="ER" 
            src={ER}/>
            <p class="card-text">Sequel to the award winning film 
            "The Farm" - second in the trilogy series. From The 
            Farm to "Estella's Revenge" and ending in "The End Was 
            Then", the horrors unleashed by the Dawsons take their 
            toll on both the family and inhabitants of Dawson Falls, 
            Ohio. The Modern Trilogy of The Ghost Walk Saga.</p>
      </div>
      </div>

      <div class="card border-secondary mb-3">
        <div class="card-header">Lilly's Cry</div>
        <div class="card-body">
          <h5 class="card-title">Directors: Rocky Karlage</h5>
          <h5 class="card-title">Screenwriter: Rocky Karlage</h5>
          <h5 class="card-title">Genre: Paranormal Docudrama</h5>
            <img className="LC" 
            alt="LC" 
            src={LC}/>
            <p class="card-text">Ghost Walk Studios presents 
            "Lilly's Cry"; a paranormal docudrama about a spirit 
            girl's journey. Please note the original "documentary" 
            concept is being revised to a more precise story-telling 
            film to reflect Lilly Rose life.</p>
      </div>
      </div>

      <div class="card border-secondary mb-3">
        <div class="card-header">The Farm</div>
        <div class="card-body">
          <h5 class="card-title">Directors: Steve Olander</h5>
          <h5 class="card-title">Screenwriter: Rocky Karlage</h5>
          <h5 class="card-title">Genre: Paranormal Horror</h5>
            <img className="TF" 
            alt="TF" 
            src={TF}/>
            <p class="card-text">Based on a true paranormal story 
            of horror! Newlyweds Johnny and Estella Harper are 
            gifted a home to stay for their honeymoon. It's a 
            wonderful time for the young couple until nature and 
            chance occurrences at 'The Farm' trap them in a place 
            worse than nightmare. The noises at night haunt their 
            waking dreams. "What finds them is not friendly... or 
            kind." View the movie on VOD at the website link above. 
            Winner, BEST FILM-Horror trophy, Indie Gathering 
            International Film Festival. 9 festival "Official 
            Selections", and international distribution. Now 
            available on Continuum VOD. Current: Official Selection 
            and new edit shown at the Lake Erie Arts & Film 
            Festival, September 18, and San Diego's FANtastic 
            Horror Film Festival 2015 Halloween! Newest 
            "Official Selection"s: 2016 "International Filmmaker 
            Festival of World Cinema" in London; nominated for 3 
            awards! And "Venice Film Week", nominated for "Best 
            Feature Film"</p>
      </div>
      </div>

      <div class="card border-secondary mb-3">
        <div class="card-header">Temptation Lane</div>
        <div class="card-body">
          <h5 class="card-title">Directors: Malik Ali</h5>
          <h5 class="card-title">Screenwriter: Malik Ali</h5>
          <h5 class="card-title">Produced by: Angry Cupcake Productions
          and Ghost Walk Studios</h5>
          <h5 class="card-title">Genre: Drama</h5>
            <img className="TL" 
            alt="TL" 
            src={TL}/>
            <p class="card-text">Temptation Lane” is a film about 
            Larry who is two years sober and must deal with the 
            reality that his son is homosexual. Which causes the 
            Larry to spiral out of control and battle his past 
            demons as well while trying to accept his son’s 
            lifestyle.</p>
      </div>
      </div>
    </>
  )
}

export default Films