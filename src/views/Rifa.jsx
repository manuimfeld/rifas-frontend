import Header from '../components/Header'
import RifaData from '../components/RifaData'
import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import { getRifaById } from '../axios/apiRifas'
import { useParams } from 'react-router-dom'

const Rifa = () => {
  const [dataRifa, setDataRifa] = useState([])
  const { id } = useParams()
  const [selectedEmoji, setSelectedEmoji] = useState('😎')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRifaById(id)
        console.log(data)
        setDataRifa(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji)
  }

  return (
    <>
      <Header />
      <RifaData dataRifa={dataRifa} emoji={selectedEmoji} />
      <Nav onEmojiSelect={handleEmojiSelect} />
    </>
  )
}

export default Rifa
