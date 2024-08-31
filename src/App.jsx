import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import Modal from './components/shared/Modal'
import { photoGallery } from './data.js'
import MainMenu from './components/shared/MainMenu.jsx'
import Footer from './components/shared/Footer.jsx'

function App() {

  const [crrPhoto, setCrrPhoto] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [activeLink, setActiveLink] = useState('doors')


  const closeModal = () => {
    setOpenModal(false)
  };

  return (
    <>
      <MainMenu
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <Gallery
        photoGallery={photoGallery}
        setCrrPhoto={setCrrPhoto}
        setOpenModal={setOpenModal}
        activeLink={activeLink}
      />
      <div className={`modal__div ${openModal && 'modal__open'}`}>
        <button className='Modal__container__close' onClick={() => closeModal()}>x</button>
        <Modal
          photoGallery={photoGallery}
          crrPhoto={crrPhoto}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
