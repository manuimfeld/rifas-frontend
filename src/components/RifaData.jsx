import Tablero from './Tablero'

const RifaData = ({ numbersRifa, id, emoji }) => {
  return (
    <>
      <main>
        <h2>PRUEBA DE RIFA</h2>
        <Tablero numbersRifa={numbersRifa} id={id} emoji={emoji} />
      </main>
    </>
  )
}

export default RifaData
