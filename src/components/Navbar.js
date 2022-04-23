import { Link } from 'gatsby'
import React from 'react'

// add the translation library to the header
export default function Navbar() {
  return (
    <nav>
        <h1>One More</h1>
        <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> 
        <Link to="../en/menu">Menu</Link>
        </div>
    </nav>
  )
}
