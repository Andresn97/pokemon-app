import { FC } from "react";

import { Ability } from '../../interfaces';

interface Props {
  abilities: Ability[]
}

export const PokemonAbilities: FC<Props> = ({ abilities }) => {
  return (
    <li className="list-group-item"> 
      <b>Habilidades:</b>
      <ul className="list-group">
        { abilities?.map( (ability, index) => (
          <li 
            className="list-group-item"
            key={index}
          > 
            { ability?.ability.name }
          </li>
        )) }
      </ul> 
    </li>
  )
}
