import { FC } from "react";

import { Type } from '../../interfaces';

interface Props {
  types: Type[]
}

export const PokemonTypes: FC<Props> = ({ types }) => {
  return (
    <li className="list-group-item"> 
      <b>Tipos:</b>
      <ul className="list-group">
        { types?.map( (type, index) => (
          <li 
            className="list-group-item"
            key={index}
          > 
            { type?.type.name }
          </li>
        )) }
      </ul> 
    </li>
  )
}
