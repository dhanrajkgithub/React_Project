import React from 'react'
import {useState} from 'react'

const App = () => {
  const [count, setCount]= useState(0)
  return (
    <div >
      <h3> count : {count}</h3>
      <button onClick={()=> setCount(count+1)}>add</button>
      <button onClick={()=> setCount(count-1)}>sub</button>
      <button onClick={()=> setCount(0)}>reset</button>
    </div>
  ) 
}

export default App