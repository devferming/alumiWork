import React from 'react'
import './styles/ButtonUp.css'

const buttonUp = ( { scrolled } ) => {

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button className={`buttonUp ${scrolled ? 'buttonUp--scrolled' : ''}`}
    onClick={handleScrollUp}
    >
      <i className='buttonUp__i bx bx-chevrons-up'></i>
    </button>
  )
}

export default buttonUp