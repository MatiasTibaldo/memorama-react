import React from 'react'

const ImageRandom = ({width, height, topic, effect}) => {
    const url = `https://source.unsplash.com/${width}x${height}/?${topic}`;
    return (
        <img src={url} alt={height}/>
    )
}
export default ImageRandom;