import { FC } from "react";

interface Props {
  page: number | string;
  next: () => void;
  previous: () => void;
  isFetching: boolean
}

export const PokemonPagination: FC<Props> = ({
  page, next, previous, isFetching
}) => {
  return (

    <div 
      className="d-flex mt-4 mb-4 justify-content-between align-items-center"
    >
      <button 
        className="btn btn-dark"
        disabled={ isFetching }
        onClick={ previous }
      >Anterior</button>
      <button 
        className="btn btn-primary"
        disabled
      >{ page }</button>
      <button 
        className="btn btn-dark"
        disabled={ isFetching }
        onClick={ next }
      >Siguiente</button>
    </div>

    // <div className="row mt-4">
    //   <div className="col-12">
    //     <nav aria-label="Page navigation example">
    //       <ul className="pagination justify-content-center">
    //         <li className='page-item'
    //         >
    //           <button 
    //             className="page-link"
    //             disabled={isFetching}
    //             onClick={ previous }
    //           >Anterior</button>
    //         </li>
    //         <li 
    //           className="page-item disabled"
    //         ><a className="page-link" href="#">{ page }</a></li>
    //         <li 
    //           className='page-item'
    //         ><button 
    //           className="page-link btn btn-dark"
    //           disabled={isFetching}
    //           onClick={ next }
    //         >Siguiente</button></li>
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
  )
}
