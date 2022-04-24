import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { Button, CardContainer, HeaderContainer } from "../Home/styled";

export const Pokedex = () => {
    const navigate = useNavigate()
 
    return (
        <div>
        <HeaderContainer>
        <Button onClick={() => goToHome(navigate)}>Ir para Home</Button>
        <h1>Detalhes do pokemon</h1>
    </HeaderContainer>
    <CardContainer>
      
    </CardContainer>
    </div>
    )

}