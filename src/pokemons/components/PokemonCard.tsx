import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TbListDetails, TbPokeball } from 'react-icons/tb';
import { FaWeightHanging } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";

import { usePokemon } from '../../hooks/usePokemon';

interface Props {
  pokemonName: string
}

export const PokemonCard: FC<Props> = ({ pokemonName }) => {

  const { pokemonQuery } = usePokemon( pokemonName );
  const { data } = pokemonQuery;
  const navigate = useNavigate();

  if (pokemonQuery.isLoading) return ( <span>Loading...</span> )

  if (!data) return (<h2>No se pudo encontrar el Pokemon</h2>)

  return (
    <div className="col">
      <div className="card" style={{width: '18rem'}}>
        <div className="row no-gutters">
          <div className="col-5">
            <img 
              src={`${data.sprites.other?.home.front_default}`} 
              className="card-img poke-card" 
              alt={data.name} 
            />
          </div>
          <div className="col-7">
            <div className="card-body">
                  <h6 className="card-text">{data.name.toUpperCase()}</h6>
                  <p className="card-text">
                    <FaWeightHanging /> { data.weight }kg
                  </p>
                  <p className="card-text">
                    <GiBodyHeight /> { data.weight }cm
                  </p>
                  <p className="card-text">
                    <TbPokeball /> { data.types[0]?.type.name }
                  </p>
                  <button 
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => navigate(`/pokemons/detail/${ data.name }`)}
                  >
                    <TbListDetails /> Detalles
                  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
