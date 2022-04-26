import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home";
import { Pokedex } from "../pages/Pokedex";
import { PokemonDetails } from "../pages/PokemonDetails";

export const Router = () =>{

    return(
        <BrowserRouter>
            <Routes>
               
                <Route index element={<Home/>}/>
                <Route path={"/pokemon/:pokemon"} element={<Pokedex/>}/>
                <Route path={"/pokemon/detalhes/:pokemon"} element={<PokemonDetails/>}/>
                <Route path={"*"} element={<h1>ERRO PAGE!</h1>}/>
            
            </Routes>
     
        </BrowserRouter>
    )


}