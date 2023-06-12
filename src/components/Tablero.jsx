import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import FormFormik from './FormFormik'

Modal.setAppElement('#root')

const Tablero = ({ dataRifa, emoji }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [indexArr, setIndexArr] = useState(null)

  useEffect(() => {}, [dataRifa, indexArr])

  const openModal = (i) => {
    setModalOpen(true)
    setIndexArr(i)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <ul className="tablero">
        {dataRifa.numbers == undefined ? (
          <h1>CARGANDO...</h1>
        ) : (
          dataRifa.numbers.map((numberMap, i) => {
            return (
              <li onClick={() => openModal(i)} key={numberMap._id}>
                {numberMap.name !== '' ? emoji : numberMap.number}
              </li>
            )
          })
        )}
      </ul>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <FormFormik
          dataRifa={dataRifa}
          indexArr={indexArr}
          closeModal={closeModal}
        />
      </Modal>
    </>
  )
}

export default Tablero
