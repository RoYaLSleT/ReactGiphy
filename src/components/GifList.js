import React from 'react'
import Gif from './Gif'
import "./GifList.css"

const GifList = ({gifs, handleSelectedGif}) => {
  return (
    <div className='gifList'>
    {/* Pour chaque gif contenu dans gifs,
    Je créé un component <Gif /> et je lui fais passer le contenu 
    de l'objet gif en cours */}
    {
      gifs.map(gif=><Gif key={gif.id} gif={gif} handleSelectedGif={handleSelectedGif}/>)
    }
    </div>
  )
}

export default GifList