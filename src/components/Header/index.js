import React from 'react'
import './style.css'

const Header = _ => (
    <nav id='navbar'>
        <ul className='nav-items'>
            <li><a className='nav-list' href='#welcome-section'>About</a></li>
            <li><a className='nav-list' href='#projects'>Work</a></li>
            <li><a className='nav-list' href='#contact'>Contact</a></li>
        </ul>
    </nav>
)

export default Header;