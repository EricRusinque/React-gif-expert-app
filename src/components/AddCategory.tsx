import { Form, Formik } from 'formik';
import { Dispatch, useState } from 'react';
import * as Yup from 'yup'
import { MyTextInput } from './MyTextInput';

interface Props {
    setCategories: Dispatch<React.SetStateAction<string[]>>
}

export const AddCategory = ({ setCategories }:Props) => {



    return (
        <div>
            <Formik
                initialValues={{
                    category: ''
                }}
                onSubmit={ (value, {resetForm}) => {
                    setCategories(prev =>[...prev, value.category]);
                    resetForm({
                        values:{
                            category: ''
                        }
                    })

                }}
                validationSchema={Yup.object({
                    category: Yup.string()
                                    .min(2, 'Debe de tener 2 catacteres o mas')
                                    .required('Required...')
                })}
            >
                {
                    (formik) => (
                        <Form>
                            <MyTextInput
                                name='category'
                                placeholder='category'
                                autoComplete='off'
                            />
                        
                        </Form>

                    )
                }

            </Formik>
        </div>
    );
};
