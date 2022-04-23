export const goToHome = (navigate) => {
    navigate("/");
  }
  
export const goToPokedex= (navigate) => {
     navigate("/pokemon");
     
  }
  
export const goToPokemonDetail = (navigate, pokemon) => {
    navigate(`/pokemon/detalhes/${pokemon}`);
  }
  