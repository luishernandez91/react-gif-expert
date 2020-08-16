import React from 'react'
import {GridGifItem} from './GridGifItem';
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    const {data: images, loading} = useFetchGifs(category);
    return (
        <>
            <h3 className={'animate__animated animate__fadeIn'}>{category}</h3>
            {loading && <p className={'animate__animated animate__flash'}>Loading...</p>}
            <div className="gif-grid">
                {
                    images.map(img => <GridGifItem key={img.id} {...img}/>)
                }
            </div>
        </>
    )
};
