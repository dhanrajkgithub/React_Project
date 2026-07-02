import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './App.css'
const App = () => {
  return (
    <div>
    <button> <Link to="/" element={<Home/>}>Home</Link></button> 
      <br/>
      <button><Link to="/about" element={<About/>}>About</Link></button>
      <br/>
    <button>  <Link to="/contact" element={<Contact/>}>Contact</Link></button>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
