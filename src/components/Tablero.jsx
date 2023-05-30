import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import FormFormik from './FormFormik'

Modal.setAppElement('#root')

const Tablero = ({ numbersRifa, id, emoji }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [indexArr, setIndexArr] = useState(null)

  useEffect(() => {}, [numbersRifa])

  const openModal = (e) => {
    setModalOpen(true)
    setIndexArr(e.target.innerText)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <ul className="tablero">
        {numbersRifa !== undefined
          ? numbersRifa.map((number) => {
              return (
                <li onClick={openModal} key={number._id}>
                  {number.nombre !== '' ? emoji : number.numero}
                </li>
              )
            })
          : null}
      </ul>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <p>Numero {indexArr}</p>
        <FormFormik index={indexArr} />
        <button onClick={closeModal}>Cerrar Modal</button>
      </Modal>
    </>
  )
}

export default Tablero
