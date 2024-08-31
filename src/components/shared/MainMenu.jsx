import React from 'react'
import './styles/MainMenu.css'


const MainMenu = ({ activeLink, setActiveLink }) => {

  const handleLinkClick = (href) => {
    setActiveLink(href)
  }

  return (
    <nav className='mainMenu' id='mainMenu'>
      <ul className='mainMenu__ul'>

        <li className='mainMenu__ul__li'>
          <a
            className={`mainMenu__ul__li--a ${activeLink === 'doors' ? 'active__li' : ''}`}
            onClick={() => handleLinkClick('doors')}
            href="#doors"
          >
            Puertas
          </a>
        </li>

        <li className='mainMenu__ul__li'>
          <a
            className={`mainMenu__ul__li--a ${activeLink === 'windows' ? 'active__li' : ''}`}
            onClick={() => handleLinkClick('windows')}
            href="#windows"
          >
            Ventanas
          </a>
        </li>

        <li className='mainMenu__ul__li'>
          <a
            className={`mainMenu__ul__li--a ${activeLink === 'bathrooms' ? 'active__li' : ''}`}
            onClick={() => handleLinkClick('bathrooms')}
            href="#bathrooms"
          >
            Baños
          </a>
        </li>

        <li className='mainMenu__ul__li'>
          <a
            className={`mainMenu__ul__li--a ${activeLink === 'enclosures' ? 'active__li' : ''}`}
            onClick={() => handleLinkClick('enclosures')}
            href="#enclosures"
          >
            Encerramientos
          </a>
        </li>

        <li className='mainMenu__ul__li'>
          <a
            className={`mainMenu__ul__li--a ${activeLink === 'railings' ? 'active__li' : ''}`}
            onClick={() => handleLinkClick('railings')}
            href="#railings"
          >
            Barandas
          </a>
        </li>

        {/*           <li className='mainMenu__ul__li'>
            <a
            className={`mainMenu__ul__li--a ${activeLink === 'handles' ? 'active__li' : ''}`}
            onClick={() => handleLinkClick('handles')}
            href="#handles"
            >
              Manijones
            </a>
          </li>

          <li className='mainMenu__ul__li'>
            <a
            className={`mainMenu__ul__li--a ${activeLink === 'glasses' ? 'active__li' : ''}`}
            onClick={() => handleLinkClick('glasses')}
            href="#glasses"
            >
              Vidrios
            </a>
          </li> */}

      </ul>
    </nav>
  )
}

export default MainMenu