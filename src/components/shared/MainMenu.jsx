import React from 'react'
import './styles/MainMenu.css'


const MainMenu = ( { scrolled } ) => {
 
    return (
      <nav className={`mainMenu ${scrolled ? 'mainMenu--scrolled' : ''}`} id='mainMenu'>
        <ul className='mainMenu__ul'>
          <li className='mainMenu__ul__li'><a className='mainMenu__ul__li--a' href="#invitation">Invitación</a></li>
          <li className='mainMenu__ul__li'><a className='mainMenu__ul__li--a' href="#ceremony">Ceremonia</a></li>
          <li className='mainMenu__ul__li'><a className='mainMenu__ul__li--a' href="#gallery">Galeria</a></li>
        </ul>
      </nav>
    )
  }

  export default MainMenu