import { Loading } from './Loading';
import { DataGifs } from '../interfaces/interfaces';

interface Props {
  img: DataGifs;
}

export const GifsGridItem = ({ img }:Props) => {


  
  return (  
    <>
    {
        <div className="card">
            <p> { img.title } </p>
            <img src={`${img.images}`}/>
        </div>
    }   
   </>

  )
}
