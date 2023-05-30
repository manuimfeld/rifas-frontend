import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import Modal from 'react-modal'

const Nav = ({ handleEmojiSelect }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = (e) => {
    setModalOpen(true)
    setIndexArr(e.target.innerText)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <nav>
      <ul>
        <li>
          <button>EMOJI</button>
        </li>
        <li></li>
        <li>
          <button>COMPARTIR</button>
        </li>
        <li>
          <button>LISTA</button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
