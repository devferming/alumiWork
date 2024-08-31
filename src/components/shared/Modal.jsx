import React from 'react'
import './styles/Modal.css'

const Modal = ( { photoGallery, crrPhoto }) => {

  return (
    <div className='Modal__container'>
      <div className='Modal'>
        <div className='Modal__container__div'>
          <img className='Modal__container__div__img' src={crrPhoto[1]} alt="puerta_img" />
          <a className='Modal__container__btn' href="#">Cotizar</a>
        </div>
        <div className='Modal__container__desc'>
          <p className='Modal__container__tittle'>{crrPhoto[2]}</p>
          <p className='Modal__container__label'>Características</p>
          <p className='Modal__container__label__p'>{crrPhoto[4]}</p>

          <p className='Modal__container__label'>Medidas</p>
          <p className='Modal__container__label__p'>{crrPhoto[5]}</p>

          <p className='Modal__container__label'>Precio</p>
          <p className='Modal__container__label__p'>{crrPhoto[3]}</p>

          <p className='Modal__container__label'>Instalación</p>
          <p className='Modal__container__label__p'>Gratis para Barranquilla - Soledad - Malambo</p>
        </div>
      </div>
    </div>
  )
}

export default Modal