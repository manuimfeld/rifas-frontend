import Tablero from './Tablero'

const RifaData = ({ numbersRifa, id }) => {
  return (
    <>
      <main>
        <h2>PRUEBA DE RIFA</h2>
        <Tablero numbersRifa={numbersRifa} id={id} />
      </main>
    </>
  )
}

export default RifaData
