import { useState } from 'react'
import './App.css'

function App() {
 
  const [loading, setLoading]=useState(false)


  return (
    <>
        <button onClick={() => setLoading(!loading)}>
         {loading ? 'Loading...' : 'login'}
        </button>
    </>
  )
}

export default App
