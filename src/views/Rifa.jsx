import Header from '../components/Header'
import RifaData from '../components/RifaData'
import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import { getRifas } from '../axios/apiRifas'
import { useParams } from 'react-router-dom'

const Rifa = () => {
  const [numbersRifa, setNumbersRifa] = useState([])
  const { id } = useParams()
  const [selectedEmoji, setSelectedEmoji] = useState('❌')

  useEffect(() => {
    console.log(id, 'USEEFFECT')
    const fetchData = async () => {
      console.log(id, 'FETCDATA')
      try {
        const data = await getRifas(id)
        setNumbersRifa(data)
        console.log(id, 'TRY')
      } catch (error) {
        console.error(error)
        console.log(id, 'ERR')
      }
    }
    fetchData()
  }, [id])

  useEffect(() => {}, [selectedEmoji])

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji)
  }

  return (
    <>
      <Header />
      <RifaData
        numbersRifa={numbersRifa.numeros}
        id={numbersRifa._id}
        emoji={selectedEmoji}
      />
      <Nav onEmojiSelect={handleEmojiSelect} />
    </>
  )
}

export default Rifa
