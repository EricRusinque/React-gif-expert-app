import { useEffect, useState } from "react";
import { GifsGridItem } from './GifsGridItem';
import { Loading } from "./Loading";
import { useLoading } from '../hooks/useLoading';


interface Props {
    category: string
}


export interface DataGifs {
    id: string;
    title: string;
    images?: {
        downsized_medium: {
            url: string
        }
    }
}


export const GifGrid = ({ category }:Props) => {


    const [data, setData] = useState<DataGifs[]>([]);
    const { loading ,setLoading } = useLoading();

    useEffect( () => {
        getGif();
    },[])

    const getGif = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=bZhOuKk9zALp0yqfSwr2evTpTXC5HRNj`
        const resp = await fetch( url )
        const  { data }  = await resp.json();
    
        const gifs:DataGifs[] = data.map( ( img:DataGifs ) => {
            return {
                id: img.id,
                title: img.title,
                images: img.images?.downsized_medium.url
            }
        })
        setTimeout(() => {
            setLoading(true);
        }, 4000);
        setData(gifs)
    }

    return (
        <>
        <h3 className="object van move-right">{ category }</h3>
        <div className="card-grid">
                    { 
                        loading 
                        ? 
                        ( data.map( img  =>{
                         return (
                            <GifsGridItem key={ img.id } img={img} loading={loading}/>
                         )  
                        }) )
                        :
                        <Loading/>
                    }

        </div>
        </>
    );
};
