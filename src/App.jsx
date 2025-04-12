import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' //import the BrowserRouter context provider
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
    </BrowserRouter>
  )
}