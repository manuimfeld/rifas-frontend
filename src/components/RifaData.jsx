import Tablero from './Tablero'

const RifaData = ({ dataRifa, emoji }) => {
  return (
    <>
      <main>
        <h2>PRUEBA DE RIFA</h2>
        <Tablero dataRifa={dataRifa} emoji={emoji} />
      </main>
    </>
  )
}

export default RifaData
