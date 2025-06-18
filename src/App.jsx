import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' //import the BrowserRouter context provider
import Home from './pages/Home'
import About from './pages/About'
import Trucks from './pages/Trucks'
import TruckDetail from './pages/TruckDetail'
import Layout from './components/Layout'

import './server'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/trucks" element={<Trucks />}/>
                <Route path="/trucks/:id" element={<TruckDetail />}/>
            </Route>            
        </Routes>
    </BrowserRouter>
  )
}