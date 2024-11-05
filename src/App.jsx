// import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
// import './App.css'
import './index.css'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'

function App() {

  return (
    <>
      <div id="container">
      <div id="navbar">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/blue'>Blue</Link>
          <Link to='/red'>Red</Link>
        </nav>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='blue' element={<Blue/>}></Route>
          <Route path='red' element={<Red/>}></Route>
        </Routes>
      </div>
          </div>
    </>
  )
}

export default App
