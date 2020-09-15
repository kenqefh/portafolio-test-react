import React from 'react'
import './style.css'

const Contact = _ => (
    <section id='contact'>
        <header>
            <h2>Let's work together...</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, nulla?</p>
        </header>
        <div>
            <a id='profile-link' href='https://www.freecodecamp.org/kenqefh' className='link-contact' target='_blank'>
                FCC
      </a>
            <a className='link-contact' href='#contact'>
                Facebbok
      </a>
            <a className='link-contact' href='#contact'>
                Youtube
      </a>
            <a className='link-contact' href='#contact'>
                Twitter
      </a>
            <a className='link-contact' href='#contact'>
                CodeWars
      </a>
        </div>
    </section>
)

export default Contact