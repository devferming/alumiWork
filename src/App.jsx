import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import Modal from './components/shared/Modal'
import { photoGallery } from './data.js'

function App() {

  const [crrPhoto, setCrrPhoto] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const closeModal = () => {
    setOpenModal(false)
  };

  return (
    <>
      <Gallery
        photoGallery={photoGallery}
        setCrrPhoto={setCrrPhoto}
        setOpenModal={setOpenModal}
      />
      <div className={`modal__div ${openModal && 'modal__open'}`}>
        <button className='Modal__container__close' onClick={() => closeModal()}>x</button>
        <Modal
          photoGallery={photoGallery}
          crrPhoto={crrPhoto}
        />
      </div>
    </>
  )
}

export default App
