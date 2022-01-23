import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialState:T) => {


    const [formData, setformData] = useState(initialState);

    const onChange = ({target}:ChangeEvent<HTMLInputElement>) => {
        setformData( prev => ({
            ...prev,
            [target.name]:target.value
        }))
    }

    return {
        ...formData,
        onChange
    }

}
 
