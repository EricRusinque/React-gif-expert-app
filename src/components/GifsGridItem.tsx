import { DataGifs } from './GifGrid';
import { Loading } from './Loading';
interface Props {
  img: DataGifs;
  loading: boolean;
}

export const GifsGridItem = ({ img,loading }:Props) => {


  
  return (  
    <>
    {
      loading 
      ?
      (
        <div className="card">
            <p> { img.title } </p>
            <img src={`${img.images}`}/>
        </div>
      )
        :
        <Loading/>
    }

   </>
  )
}
