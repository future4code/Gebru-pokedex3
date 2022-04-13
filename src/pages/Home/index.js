import React from "react";
import {goToPokedex, goToPokemonDetail} from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";


export const Home = () => {
 

    const navigate = useNavigate()

    return (<>
    
    <h1>Home</h1>

    <button onClick={() => goToPokedex(navigate)}>pokemon</button>
    <button  onClick={() => goToPokemonDetail(navigate)}>pokemon detalhes</button>
    
    
    
    
    </>)

}