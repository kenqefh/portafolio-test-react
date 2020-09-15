import React from 'react'
import './style.css'

const Projects = _ => (
    <section id='projects'>
        <header>
            <h2>There are some of my projects in this month</h2>
        </header>
        <div className='projects-container'>
            <a className='link-projects' href='#contact'>
                <img src='https://images.hdqwalls.com/wallpapers/spiderman-miles-lost-in-space-4k-0f.jpg' alt='tribute page' />
                <h3 className='project-tile'>Ricardo Palma - tribute page</h3>
            </a>
            <a className='link-projects' href='#contact'>
                <img src='https://images.hdqwalls.com/wallpapers/spiderman-miles-lost-in-space-4k-0f.jpg' alt='survey form' />
                <h3 className='project-tile'>Cazador de Dragones - survey form</h3>
            </a>
            <a className='link-projects' href='#contact'>
                <img src='https://images.hdqwalls.com/wallpapers/spiderman-miles-lost-in-space-4k-0f.jpg' alt='reino dragon' />
                <h3 className='project-tile'>Reino Dragones - product landing page</h3>
            </a>
            <a className='link-projects' href='#contact'>
                <img src='https://images.hdqwalls.com/wallpapers/spiderman-miles-lost-in-space-4k-0f.jpg' alt='documentation' />
                <h3 className='project-tile'>Ruby - Documentation</h3>
            </a>
        </div>
    </section>
)

export default Projects