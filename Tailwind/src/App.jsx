import React, { useEffect } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {

  useEffect(() => {
    console.log("Thank You For Visiting")
  }, [])

  return (
    <div>
      <Header />
      <Cards name="Dhanraj " age={23} gender="male" />
      <Cards name="Vikas " age={24} gender="male" />
      <button>See More</button>
    </div>
  )
}

export default App