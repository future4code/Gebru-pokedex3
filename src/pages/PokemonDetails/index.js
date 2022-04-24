import React, { useState } from "react";
import { DivComponent } from "./styled";
import {goToPokedex} from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";
import "./index.css"
import { useParams } from "react-router-dom";
import axios from "axios";

export const PokemonDetails = () => {
    const params = useParams()
   
    const navigate = useNavigate()
    const [selectPokemon, setSelectPokemon] = useState()
    

    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
        .then((res) => setSelectPokemon(res.data))
        .catch((err) => console.log(err.response.message));

        // console.log(params)


 
    return <main className="container">
    <div className="container-card">
      <div className="first-container">
         {selectPokemon && <img src={selectPokemon.sprites.front_default}/>}  
         {selectPokemon && <img src={selectPokemon.sprites.back_default}/>}
      </div>
      <div class="two-container-child">
           {selectPokemon && <h1>{selectPokemon.name}</h1>} 
           <h2>tipo:</h2>
        <div>
        {selectPokemon && selectPokemon.types.map((tipo) => {
     
        return <p key={tipo.type.name}>{tipo.type.name}</p>;
            
})}
        </div>
      </div>
      <div className="thre-container-child">
           
               <h2>Poderes:</h2>               
           
           <div>
           {selectPokemon && selectPokemon.stats.map((poderes) => {
                return (
                  <p>
                    {poderes.stat.name}: {poderes.base_stat}
                  </p>
                );
              })}
           </div>
      </div>
      <div className="for-container-child">
         <h2>Principais ataques:</h2>
         <div>
         {selectPokemon && selectPokemon.moves.map((ataque) => {
                  return (
                   <p >{ataque.move.name}</p>
                  );
                })}
        </div>
      </div>
      <div className="button">
        <button onClick={()=> navigate(-1)}>Voltar</button>
        <button onClick={() => goToPokedex(navigate)}>Ir para Pokedex</button>
        </div>
    </div>
   
  </main>

}