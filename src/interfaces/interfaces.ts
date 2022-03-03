
export interface DataGifs {
    id: string;
    title: string;
    images?: {
        downsized_medium: {
            url: string
        }
    }
}

export interface stateFetch {
    gifs: null | DataGifs[];
    loading: boolean;
    error: null;
}