import React, {useState} from 'react'
import {AddCategory} from './components/addCategory'
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategory] = useState([]);
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategory={setCategory}/>
            <hr/>
            {
                categories.map(cat => <GifGrid key={cat} category={cat}/>)
            }
        </>
    )
};
