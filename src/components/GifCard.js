import React from 'react'
import "../App.css"


function GifCard(props) {
  const { gif } = props
  return (
    <div className="gifCard" key={gif.name}>
      <img src={gif.images.fixed_height.webp} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  )
}

export default GifCard
