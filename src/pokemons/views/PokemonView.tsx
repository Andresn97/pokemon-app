import { FC } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { BiArrowFromRight } from "react-icons/bi";
import { MdCatchingPokemon } from "react-icons/md";

import { usePokemon } from '../../hooks/usePokemon';

import { 
  PokemonAbilities, 
  PokemonEvolutions, 
  PokemonMoves,
  PokemonTypes,
} from '../components';

export const PokemonView: FC = () => {

  const navigate = useNavigate();
  const params = useParams();
  const { name = '' } = params;  

  const { pokemonQuery } = usePokemon( name );
  const { data } = pokemonQuery;

  if (pokemonQuery.isLoading) return ( <span>Loading...</span> );

  if (!data) return (<Navigate to={'./list'} />);

  return (
      <div className="row mt-5 mb-5">
        <div className="col-4">
          <img 
            src={`${data.sprites.other?.home.front_default}`} 
            className="img-thumbnail" 
            alt={data.name} 
          />
          <button 
            className="btn btn-outline-dark mt-2"
            onClick={() => navigate('/pokemons/list')}
          ><BiArrowFromRight /></button>
        </div>

        <div className="col-8">
          <h3><MdCatchingPokemon /> { data.name.toUpperCase() }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> 
              <b>Altura:</b> { data.height }cm
            </li>
            <li className="list-group-item"> 
              <b>Peso:</b> { data.weight }kg
            </li>
            <PokemonTypes types={data.types} />
            <PokemonAbilities abilities={data.abilities} />
            <PokemonMoves moves={data.moves} />
            <PokemonEvolutions specie={data.species} />
          </ul>
        </div>
      </div>
  )
}
