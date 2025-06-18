import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <Link className={"title-link"}to="/">#OVERLANDERS</Link>
            <nav>
                <Link className={"about-link"}to="/About">About</Link>
                <Link className={"trucks-link"}to="/Trucks">Trucks</Link>
            </nav>
        </header>
    )
}