import { Form, Formik } from 'formik';
import { Dispatch } from 'react';
import * as Yup from 'yup'
import { MyTextInput } from './MyTextInput';

interface Props {
    setCategories:  Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory = ({ setCategories }:Props) => {


    return (
        <>
            <Formik
                initialValues={{
                    category: ''
                }}
                onSubmit={ (value, { resetForm }) => {
                    
                    setTimeout(() => {
                        setCategories(prev =>[ value.category, ...prev]);                       
                    }, 1500);
                    resetForm({
                        values:{
                            category: ''
                        }
                    })
                }}
                validationSchema={Yup.object({
                    category: Yup.string()
                                    .min(2, 'Debe de tener 2 catacteres o mas.')

                })}
            >
                {
                    ({handleBlur }) => (
                        <Form>
                            <MyTextInput
                                
                                name='category'
                                placeholder='category'
                                autoComplete='off'
                                onBlur={ handleBlur }
                            />
                        </Form>

                    )
                }

            </Formik>
        </>
    );
};
