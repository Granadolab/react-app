import React, { useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertComponent = props => {

    const [categories, setCategories] = useState(['one punch']);


    
    return (
        <>
            <h2>Gif app</h2>
            <hr />

            <AddCategory setCategories ={setCategories}/>

            <ol>
            {
                categories.map(category => <GifGrid key={category} category = {category} /> )
            }  
            </ol>  
        </>
    )
}

export default GifExpertComponent
