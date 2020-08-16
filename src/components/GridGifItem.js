import React from 'react'

export const GridGifItem = ({title, url}) => {
    return (
        <div className="gif-item animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
};
