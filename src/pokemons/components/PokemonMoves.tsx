import { FC } from "react";

import { Move } from '../../interfaces';

interface Props {
  moves: Move[]
}

export const PokemonMoves: FC<Props> = ({ moves }) => {
  return (
    <li className="list-group-item"> 
      <b className="mb-2">Movimientos:</b>
      <div className="container mt-2">
        { moves?.map( (data, index) => (
          <span 
            key={ index }
            className='badge rounded-pill m-1 label-picker text-bg-dark'
          >
            { data.move.name }
        </span>
        )) }
      </div>
    </li>
  )
}
