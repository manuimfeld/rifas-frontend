import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import Modal from 'react-modal'

const Nav = ({ onEmojiSelect }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = (e) => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleEmojiClick = (event) => {
    const emoji = event.emoji
    onEmojiSelect(emoji)
  }

  return (
    <nav>
      <ul>
        <li>
          <button onClick={openModal}>EMOJI</button>
        </li>
        <li>
          <button>COMPARTIR</button>
        </li>
        <li>
          <button>LISTA</button>
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <EmojiPicker height={500} width={235} onEmojiClick={handleEmojiClick} />
        <button onClick={closeModal}>Cerrar Modal</button>
      </Modal>
    </nav>
  )
}

export default Nav
