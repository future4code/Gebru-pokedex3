import React from "react";
import { DivComponent } from "./styled";
import {goToPokedex} from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";
import Img1 from "./buba1.png"
import Img2 from "./buba2.png"
import "./index.css"
import { useParams } from "react-router-dom";

export const PokemonDetails = () => {
    const params = useParams()
   
    const navigate = useNavigate()
 
    return <main class="container">
    <div class="container-card">
      <div class="first-container">
           <img src={Img2}/>
           <img src={Img1}/>
      </div>
      <div class="two-container-child">
           <h1>buba</h1>
           <h2>tipo:</h2>
        <div>
           <p>grass</p>
           <p>poison</p>
        </div>
      </div>
      <div class="thre-container-child">
           
               <h2>Poderes:</h2>               
           
           <div>
                <p>hp: 60</p>
                <p>attack: 62</p>
                <p>defense: 63</p>
                <p>special-attack: 80</p>
                <p>special-defense: 80</p>
                <p>speed: 60</p>
           </div>
      </div>
      <div class="for-container-child">
         <h2>Principais ataques:</h2>
         <div>
           <p> swords-dance</p> 
           <p> cut</p> 
           <p> bind</p> 
           <p> vine-whip</p> 
           <p> headbutt</p> 
        </div>
      </div>
      <div className="button">
        <button onClick={()=> navigate(-1)}>Voltar</button>
        <button onClick={() => goToPokedex(navigate)}>Ir para Pokedex</button>
        </div>
    </div>
   
  </main>

}