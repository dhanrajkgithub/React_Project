import React from 'react'
import"./Cards.css"
function Cards(props) {
  return (
    <div className='card'>
      <h2>Name ={props.name}</h2>
      <h2>Age={props.age}</h2>
      <h2>Gender={props.gender}</h2>
    </div>
  )
}

export default Cards
