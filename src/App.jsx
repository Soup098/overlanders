import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' //import the BrowserRouter context provider
import Home from './pages/Home'
import About from './pages/About'
import Trucks from './pages/Trucks'

import './server'

export default function App() {
  return (
    <BrowserRouter>
        <header>
            <Link className={"title-link"}to="/">#OVERLANDERS</Link>
            <nav>
                <Link className={"about-link"}to="/About">About</Link>
                <Link className={"trucks-link"}to="/Trucks">Trucks</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/trucks" element={<Trucks />}/>
        </Routes>
    </BrowserRouter>
  )
}