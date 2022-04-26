export const goToHome = (navigate) => {
    navigate("/");
  }
  
export const goToPokedex= (navigate, pokemon) => {
     navigate(`/pokemon/${pokemon}`);
     
  }
  
export const goToPokemonDetail = (navigate, pokemon) => {
    navigate(`/pokemon/detalhes/${pokemon}`);
  }
  