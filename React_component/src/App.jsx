import React from 'react'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'



const App = () => {
  return (
    <>
    <Card name="John Doe" age="25" />
    <Card name="Jane Smith" age="30" />
    <Card name="Bob Johnson" age="35" />
    <Card name="Alice Williams" age="28" />
    <Card name="Charlie Brown" age="32" />

      
    </>
  )
}

export default App