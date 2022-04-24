import React, { useState } from "react";
import {Router} from "./routes/Router"
import {PokemonsList} from './context/PokemonsList'


function App() {
  const [cart, setCart] = useState([])

  return (
    <PokemonsList.Provider value={{cart, setCart}}>
       <Router/>
    </PokemonsList.Provider>
  );
}

export default App;
