import { ErrorMessage, useField } from "formik";

interface Props {
    name: string;
    type?: 'text';
    placeholder?: string;
    [x: string]: any;
}


export const MyTextInput = ({...props}:Props) => {

    const [ field ] = useField(props);

    return (
        <>
            <input
                {...field } { ...props } 
            />
            <ErrorMessage 
                component='span' 
                className=""
                name={ props.name } 
            />
        </>
    );
};
