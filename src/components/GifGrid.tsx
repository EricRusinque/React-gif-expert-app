import { GifsGridItem } from './GifsGridItem';
import { Loading } from "./Loading";
import { useFetch } from '../hooks/useFetch';


interface Props {
    category: string
}


export const GifGrid = ({ category }:Props) => {


    const { loading, gifs } = useFetch({
        api:`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=bZhOuKk9zALp0yqfSwr2evTpTXC5HRNj`
    });
    
    return (
        <>
        <h3 className="object van move-right">{ category }</h3>
        <div className="card-grid">
                    { 
                        loading 
                        ? 
                        ( !!gifs && gifs.map( (img)  =>{
                            
                            console.log(img);
                            return (
                                <GifsGridItem key={ img.id } img={img} />
                                )  
                            }) )
                            :
                            <Loading/>
                    }

        </div>
        </>
    );
};
