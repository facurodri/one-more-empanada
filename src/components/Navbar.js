import { Link } from 'gatsby'
import React from 'react'
 import navCss from '../pages/css/navbar.css'

// add the translation library to the header
export default function Navbar() {
  return (
    <nav>
        <div className='navbar'>
            <span className='empa-logo' >One More </span>
            <div className='nav-links'> 
                <span class="material-symbols-outlined">
                    dining
                </span>
                <Link className='link' to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> 
                <Link to="../en/menu">Menu</Link>
            </div>
        </div>
    </nav>
  )
}
