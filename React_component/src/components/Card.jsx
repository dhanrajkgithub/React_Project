import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card' >
        
        <div>{props.name}</div>
        <div>{props.age}</div>

    </div>
  )
}

export default Card