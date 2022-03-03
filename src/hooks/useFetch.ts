import { useEffect, useState } from "react";
import { DataGifs, stateFetch } from "../interfaces/interfaces";

interface Props {
    api: string
}

export const useFetch = ( { api }:Props ) => {

    const [state, setState] = useState<stateFetch>({ 
        gifs: null, 
        loading: false, 
        error: null
    });

    useEffect(() => {
    
        fetch( api )
            .then( resp => resp.json())
            .then( ({data}) => {
                const gifs:DataGifs[] = data.map( ( img:DataGifs ) => {
                    return {
                        id: img.id,
                        title: img.title,
                        images: img.images?.downsized_medium.url
                    }
                })

                setTimeout(() => {
                    setState({
                        loading: true,
                        error:null,
                        gifs
                    })
                }, 4000);
            });
    }, [api]);

    return state;


};