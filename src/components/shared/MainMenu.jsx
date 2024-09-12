import React from 'react'
import './styles/MainMenu.css'


const MainMenu = ({ activeCategory, setActiveCategory, subMenu, setSubMenu }) => {

  const subMenuArr = {
    doors: [
      ['simple'],
      ['standard'],
      ['fixedBody'],
      ['double'],
      ['facade'],
    ],
    windows: [
      ['smooth'],
      ['reticulated'],
      ['projectors'],
      ['heavy'],
      ['windowDoor'],
    ],
    bathrooms: [
      ['pvc'],
      ['acrylic'],
      ['temperedGlass'],
      ['windows'],
    ],
    enclosures: [
      ['aluminum'],
      ['temperedGlass'],
      ['stainlessSteel'],
    ],
    railings: [
      ['aluminum'],
      ['stainlessSteel'],
      ['temperedGlass'],
    ]
  }

  const translation = {
    doors: 'Puertas',
    bathrooms: 'Baños',
    enclosures: 'Encerramientos',
    windows: 'Ventanas',
    railings: 'Barandas',
    simple: 'Sencilla',
    standard: 'Pesada',
    fixedBody: 'Cuerpo Fijo',
    double: 'Doble',
    facade: 'Fachada',
    smooth: 'Lisa',
    reticulated: 'Reticulada',
    projectors: 'Proyectante',
    windowDoor: 'Puerta Ventana',
    pvc: 'PVC',
    acrylic: 'Acrílico',
    aluminum: 'Aluminio',
    temperedGlass: 'Vidrio Templado',
    stainlessSteel: 'Acero Inoxidable',
    heavy: 'Pesadas'
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
    setSubMenu(subMenuArr[category][0][0])
  }

  const handleSubCategoryClick = (subCategory) => {
    setSubMenu(subCategory)
  }

  return (
    <nav className='mainMenu' id='mainMenu'>
      <ul className='mainMenu__ul'>
        {
          Object.entries(subMenuArr).map(([category], crrIdx) => (
            <li className='mainMenu__ul__li' id={`menu-${crrIdx}`} key={`menu-${crrIdx}`}>
              <a
                className={`mainMenu__ul__li--a ${activeCategory === category ? 'active_menu' : ''}`}
                onClick={() => handleCategoryClick(category)}
                href={`#${category}`}
              >
                {translation[category]}
              </a>
            </li>
          ))
        }
      </ul>

      <ul className='mainMenu__subMenu__ul'>
        {
          subMenuArr[activeCategory].map(([subCategory], crrIdx) => (

            <li className='mainMenu__subMenu__ul__li' id={`subMenu-${crrIdx}`} key={`subMenu-${crrIdx}`}>
              <a
                className={`mainMenu__subMenu__ul__li--a ${subCategory === subMenu ? 'active_subMenu' : ''}`}
                onClick={() => handleSubCategoryClick(subCategory)}
                href="#doors"
              >
                {translation[subCategory]}
              </a>
            </li>

          ))
        }
      </ul>

    </nav>
  )

}

export default MainMenu