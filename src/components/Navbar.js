import { Link } from 'gatsby'
import React from 'react'

// add the translation library to the header
export default function Navbar() {
  return (
    <nav>
        <h1>One More</h1>
        <div className='links'>
        <Link to="/">Home</Link> <br/>
        <Link to="/about">About</Link><br/> 
        <Link to="/contact">Contact</Link> 
        </div>
    </nav>
  )
}
