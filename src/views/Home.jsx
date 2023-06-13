import { useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [isRifaSelected, setIsRifaSelected] = useState(false)

  const handleRifaEntryClick = () => {
    setIsRifaSelected(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const id = e.target.id.value
    if (id) {
      navigate(`/rifa/${id}`)
    }
  }

  return (
    <main className="home">
      <Header />
      <Link to="/create-rifa">Crear rifa</Link>
      <button onClick={handleRifaEntryClick}>Entrar a una rifa</button>
      {isRifaSelected && (
        <form onSubmit={handleFormSubmit}>
          <input
            type="number"
            id="id"
            maxLength={10}
            placeholder="Ingresar ID"
          />
          <button>Entrar</button>
        </form>
      )}
    </main>
  )
}

export default Home
