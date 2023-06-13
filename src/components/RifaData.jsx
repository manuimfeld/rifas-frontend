import { Link } from 'react-router-dom'
import Tablero from './Tablero'

const RifaData = ({ dataRifa, emoji }) => {
  return (
    <>
      <main id="tablero">
        <Link to={`/`} className="back-route">
          ← Volver
        </Link>
        <h2>RIFA {dataRifa._id}</h2>
        <Tablero dataRifa={dataRifa} emoji={emoji} />
      </main>
    </>
  )
}

export default RifaData
