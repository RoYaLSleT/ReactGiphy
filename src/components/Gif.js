import React from 'react'
import "./Gif.css"

const Gif = ({gif, handleSelectedGif}) => {
  return (
    <div className='gifItem'>Gif title : {gif.title}<br />
      <img src={gif.images.downsized_large.url} alt={gif.title} onClick={()=>handleSelectedGif(gif)}/>
    </div>
  )
}

export default Gif