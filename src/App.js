import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <nav id='navbar'>
        <ul className='items-nav'>
          <li><a className='nav-list' href='#welcome-section'>About</a></li>
          <li><a className='nav-list' href='#projects'>Work</a></li>
          <li><a className='nav-list' href='#contact'>Contact</a></li>
        </ul>
      </nav>


      <main>

        <section id='welcome-section'>
          <h1>Hey I am Kenq</h1>
          <p>a web developer</p>
        </section>

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
      </main>
      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ipsam deserunt officia eaque ducimus corporis debitis porro nemo cum.</p>

      </footer>
    </>
  );
}

export default App;
