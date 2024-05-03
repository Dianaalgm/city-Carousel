import React from 'react'

function Card({currentImg}) {
  return (
    <div className="cardContainer">
      <img className= "aPic" src={currentImg} alt=""/>
    </div>
    
  )
}

export default Card