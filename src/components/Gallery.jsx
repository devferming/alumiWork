import React, { useEffect, useState } from 'react'
import './styles/Gallery.css'

const Gallery = ({ photoGallery, setCrrPhoto, setOpenModal, activeLink }) => {

  const [crrGallery, setCrrGallery] = useState(photoGallery.doors)

  const openModal = (crrElm) => {
    setCrrPhoto(crrElm)
    setOpenModal(true)
  };

  useEffect(() => {
    if (activeLink && photoGallery[activeLink]) {
      setCrrGallery(photoGallery[activeLink])
    } else {
      setCrrGallery([])
    }
  }, [activeLink, photoGallery])


  return (
    <section className={`gallery ${activeLink}`} id='gallery'>

      {
        crrGallery.map((crrPhoto, crrIdx, crrElm) => (
          <article className='gallery__article' key={crrIdx} >
            <p className='gallery__price'>{crrPhoto[3]}</p>
            <img className='gallery__article__bg' src={crrPhoto[1]} alt="puerta_img" />
            <p className='gallery__article__desc'>{crrPhoto[2]}</p>
            <div className='gallery__article__btns'>
              <button className='gallery__btn1' onClick={() => openModal(crrElm[crrIdx])}>+ Info</button>
              <a className='gallery__btn2' href={`https://wa.me/573207442620?text=${crrPhoto[0]}`}>Cotizar</a>
            </div>
          </article>
        ))
      }

    </section>
  )
}

export default Gallery