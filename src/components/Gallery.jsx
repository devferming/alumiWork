import React from 'react'
import './styles/Gallery.css'

const Gallery = () => {

  const photoGallery = {
    doors: [
      ['Titulo', '/gallery/doors/doors_001.png', 'Puerta estandar 90cm*2mts.', '$950.000'],
      ['Titulo', '/gallery/doors/doors_002.png', 'Puerta + Cuerpo Fijo 1.5*2 mts.', '$1.600.000'],
      ['Titulo', '/gallery/doors/doors_003.png', 'Puerta + Cuerpo Fijo Proyectante 1.5*2 mts.', '$1.600.000'],
      ['Titulo', '/gallery/doors/doors_006.png', 'Puerta + Doble Cuerpo Fijo Proyectante 2*2 mts.', '$1.900.000'],
      ['Titulo', '/gallery/doors/doors_004.png', 'Puerta Doble 2*2 mts.', '$1.900.000'],
      ['Titulo', '/gallery/doors/doors_005.png', 'Puerta Doble 2*2 mts.', '$1.900.000'],
    ]
  }

  return (
    <section className='gallery' id='gallery'>

      {
        photoGallery.doors.map((crrPhoto, crrIdx) => (
          <article className='gallery__article' key={crrIdx} >
            <p className='gallery__price'>{crrPhoto[3]}</p>
            <img className='gallery__article__bg' src={crrPhoto[1]} alt="puerta_img" />
            <p className='gallery__article__desc'>{crrPhoto[2]}</p>
            <button className='gallery__btn1'>+ Info</button>
            <button className='gallery__btn2'>Cotizar</button>
          </article>
        ))
      }

    </section>
  )
}

export default Gallery