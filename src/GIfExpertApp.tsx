import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';



export const GIfExpertApp = () => {

    // const categories =

    const [categories, setCategories] = useState<string[]>(['Boruto']);

    return (
        <>
            <h1 className="principal-title">GifExpertApp</h1>
            <div>

                <AddCategory setCategories={setCategories} />

                <ol>
                    {
                        categories.map(category => {
                            return (
                                <GifGrid key={category} category={category} />
                            )
                        })
                    }
                </ol>
            </div>
        </>
    )

};
