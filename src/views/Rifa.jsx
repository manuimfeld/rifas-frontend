import Header from "../components/Header"
import RifaData from "../components/RifaData"
import Nav from "../components/Nav"
import { useEffect, useState } from "react"
import getRifas from "../axios/getRifas"
import { useParams } from "react-router-dom"

const Rifa = () => {
  const [numbersRifa, setNumbersRifa] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRifas(id);
        setNumbersRifa(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
  }, [id])

  return (
    <>
      <Header />
      <RifaData numbersRifa={numbersRifa.numeros} id={numbersRifa._id}/>
      <Nav />
    </>
  )
}

export default Rifa