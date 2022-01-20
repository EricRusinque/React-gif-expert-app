import { useState } from "react";
import { AddCategory } from "./components/AddCategory";



export const GIfExpertApp = () => {

    // const categories =

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    return (
        <div>
            <h1>GifExpertApp</h1>
            <hr />

            <AddCategory setCategories={ setCategories }/>

            <ol>
                {
                    categories.map( (category) => (
                        <li key={category}>{ category }</li>
                    ))
                }
            </ol>
        </div>
    )

};
