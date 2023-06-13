import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Nav = ({ onEmojiSelect }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const { id } = useParams()

  const openModal = () => {
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
          <Link to={`/list/${id}`}>Lista</Link>
        </li>
      </ul>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={100}
      >
        <EmojiPicker height={500} width={235} onEmojiClick={handleEmojiClick} />
        <button onClick={closeModal} className="btn-close-modal">
          Cerrar menú
        </button>
      </Modal>
    </nav>
  )
}

export default Nav
