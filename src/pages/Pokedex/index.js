import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokemonsList } from '../../context/PokemonsList'
import { goToHome, goToPokemonDetail } from '../../routes/Coordinator'
import {
  Button,
  CardContainer,
  CardFoto,
  HeaderContainer,
  FormContainer,
} from './styled'

export const Pokedex = () => {
  const navigate = useNavigate()
  const { cart } = useContext(PokemonsList)

  const pokemonsCart = cart.filter(function(a) {
    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true)
  }, Object.create(null))

  const listPokemons =
    pokemonsCart &&
    pokemonsCart.map(pokemon => {
      return (
        <CardContainer key={pokemon.id}>
          <CardFoto>
            <img src={pokemon.sprites.front_default} alt='' />
          </CardFoto>
          <h2>{pokemon.name}</h2>
          <Button onClick={() => goToPokemonDetail(navigate, pokemon.name)}>
            Ver Detalhes
          </Button>
        </CardContainer>
      )
    })

  return (
    <div>
      <HeaderContainer>
        <Button onClick={() => goToHome(navigate)}>Ir para Home</Button>
        <h2> Pokedex </h2>
      </HeaderContainer>
      <FormContainer>{listPokemons}</FormContainer>
    </div>
  )
}
