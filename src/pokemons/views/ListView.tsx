import { FC } from "react";

import { usePokemons } from '../../hooks/usePokemons';

import { PokemonCard } from "../components";

export const ListView: FC = () => {

  const { 
    pokemonsQuery, 
    page, 
    previousPage, 
    nextPage 
  } = usePokemons();
  const { data } = pokemonsQuery;

  if (pokemonsQuery.isLoading) return ( <span>Loading...</span> )

  if (!data) return (<h2>No se pudo encontrar Pokemons</h2>)

  return (
    <>
      <h1 className="text-center">Lista de Pokemons</h1>
      <div className="row justify-content-center g-3 mt-3">
        { 
          data.results.map( (pokemon, index) => (
            <PokemonCard 
              key={index}
              pokemonName={pokemon.name}
            />
          )) 
        }
      </div>
      <div 
      className="d-flex mt-4 mb-4 justify-content-between align-items-center"
    >
      <button 
        className="btn btn-dark"
        disabled={ !(data.previous) || pokemonsQuery.isFetching }
        onClick={ previousPage }
      >Anterior</button>
      <button 
        className="btn btn-primary"
        disabled
      >{ page }</button>
      <button 
        className="btn btn-dark"
        disabled={ !(data.next) || pokemonsQuery.isFetching }
        onClick={ nextPage }
      >Siguiente</button>
    </div>
    </>
  )
}
