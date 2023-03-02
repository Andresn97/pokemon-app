import { FC } from "react";
import { Navigate } from 'react-router-dom';

import { Species } from '../../interfaces';

import { usePokemonEvolutions } from '../../hooks/usePokemonEvolutions';
import { getEvolutionChain } from '../../helpers/chain';

interface Props {
  specie: Species
}

export const PokemonEvolutions: FC<Props> = ({ specie }) => {
  
  const { pokemonEvolutionQuery } = usePokemonEvolutions(specie);
  const { data } = pokemonEvolutionQuery;

  if (pokemonEvolutionQuery.isLoading) return ( <span>Loading...</span> );

  if (!data) return (<Navigate to={'./list'} />);
  
  
  return (
    <li className="list-group-item"> 
      <b>Evolución:</b>
      <ul className="list-group">
        <li 
          className="list-group-item"
        > 
          { data.chain.species.name }
        </li>
        { getEvolutionChain(data.chain.evolves_to)?.map( (data, index) => (
          <li 
            className="list-group-item"
            key={index}
          > 
            { data.name }
          </li>
        )) }
      </ul> 
    </li>
  )
}
