import React, { useEffect, useState } from 'react'
import './styles/Gallery.css'

const Gallery = ({ photoGallery, setCrrPhoto, setOpenModal, activeCategory, subMenu }) => {

  const [crrGallery, setCrrGallery] = useState(photoGallery[activeCategory])

  const openModal = (crrElm) => {
    setCrrPhoto(crrElm)
    setOpenModal(true)
  };

  useEffect(() => {
    if (activeCategory && photoGallery[activeCategory]) {
      setCrrGallery(photoGallery[activeCategory])
    } else {
      setCrrGallery([])
    }
  }, [activeCategory, photoGallery, crrGallery])


  return (
    <section className={`gallery ${activeCategory}`} id='gallery'>

      {
        crrGallery[subMenu]?.map((crrPhoto, crrIdx, crrElm) => (
          <article className='gallery__article' key={`gallery-${crrIdx}`} >
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